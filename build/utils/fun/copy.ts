import path from 'path'
import { buildConfig, buildOutput, epOutput, epPackage, epRoot, Module, projRoot } from "../var"
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { withTaskName } from './gulp'
import { parallel } from 'gulp'

export const copyFullStyle = () => {

}
export const copyFiles = () => Promise.all([
  copyFile(epPackage, path.join(epOutput, 'package.json')),
  copyFile(
    path.resolve(epRoot, 'README.md'),
    path.resolve(epOutput, 'README.md')
  ),
  copyFile(
    path.resolve(projRoot, 'global.d.ts'),
    path.resolve(epOutput, 'global.d.ts')
  )
])
export const copyTypesDefinitions = (done:any) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) => {
    return withTaskName(`copyTypes:${module}`, () => {
      return copy(src, buildConfig[module].output.path, { recursive: true })
    })
  }
  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}