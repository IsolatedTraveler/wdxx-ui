import type { CompilerOptions, SourceFile } from 'ts-morph'
import consola from 'consola'
import { Project } from 'ts-morph'
import chalk from 'chalk'
import { mkdir, readFile, writeFile } from 'fs/promises'
const path = require('path'), glob = require('fast-glob')
import * as vueCompiler from 'vue/compiler-sfc'

import { projRoot, pkgRoot, buildOutput, epRoot, pathRewriter, excludeFiles,  } from '../../utils'

const TSCONFIG_PATH = path.resolve(projRoot, 'tsconfig.web.json')
const outDir = path.resolve(buildOutput, 'types')

async function addSourceFiles(project: Project) {
  project.addSourceFileAtPath(path.resolve(projRoot, 'typings/env.d.ts'))

  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  const filePaths = excludeFiles(
    await glob([globSourceFile, '!ui/**/*', '!*.d.ts'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const epPaths = excludeFiles(
    await glob(globSourceFile, {
      cwd: epRoot,
      onlyFiles: true,
    })
  )
  const sourceFiles: SourceFile[] = []
  await Promise.all([
    ...filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await readFile(file, 'utf-8')
        const hasTsNoCheck = content.includes('@ts-nocheck')

        const sfc = vueCompiler.parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content =
            (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '')

          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
          }

          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = project.createSourceFile(
            `${path.relative(process.cwd(), file)}.${lang}`,
            content
          )
          sourceFiles.push(sourceFile)
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    }),
    ...epPaths.map(async (file) => {
      const content = await readFile(path.resolve(epRoot, file), 'utf-8')
      sourceFiles.push(
        project.createSourceFile(path.resolve(pkgRoot, file), content)
      )
    })
  ])

  return sourceFiles
}

function typeCheck(project: Project) {
  const diagnostics = project.getPreEmitDiagnostics()
  if (diagnostics.length > 0) {
    consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
    const err = new Error('Failed to generate dts.')
    // consola.error(err)
    throw err
  }
}

export const generateTypesDefinitions = async () => {
  const compilerOptions: CompilerOptions = {
    declaration: true,
    emitDeclarationOnly: true,
    noEmitOnError: true,
    outDir,
    baseUrl: projRoot,
    preserveSymlinks: true,
    skipLibCheck: true,
    noImplicitAny: false
  }

  const project = new Project({
    tsConfigFilePath: TSCONFIG_PATH,
    compilerOptions,
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true
  })
  const sourceFiles = await addSourceFiles(project)
  typeCheck(project)
  await project.emit({
    emitOnlyDtsFiles: true
  })

  const tasks = sourceFiles.map(async (sourceFile) => {
    const relativePath = path.relative(pkgRoot, sourceFile.getFilePath())
    consola.trace(
      chalk.yellow(
        `Generating definition for file: ${chalk.bold(relativePath)}`
      )
    )

    const emitOutput = sourceFile.getEmitOutput()
    const emitFiles = emitOutput.getOutputFiles()
    if (emitFiles.length === 0) {
      throw new Error(`Emit no file: ${chalk.bold(relativePath)}`)
    }

    const subTasks = emitFiles.map(async (outputFile) => {
      const filepath = outputFile.getFilePath()
      await mkdir(path.dirname(filepath), {
        recursive: true
      })

      await writeFile(
        filepath,
        pathRewriter('esm')(outputFile.getText()),
        'utf8'
      )
      // 输出成功转换文件，暂不需要
      // consola.success(
      //   chalk.green(
      //     `Definition for file: ${chalk.bold(relativePath)} generated`
      //   )
      // )
    })

    await Promise.all(subTasks)
  })

  await Promise.all(tasks)
}