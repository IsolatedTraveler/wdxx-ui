import glob from 'fast-glob'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import VueMacros from 'unplugin-vue-macros/rollup'
import {excludeFiles, pkgRoot, target} from '../../utils'
import {ElementPlusAlias} from '../plugins'

export const buildModules = async () => {
  // 获取包中有效文件
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  )
  // rollup打包
  const bondle = await rollup({
    input,
    plugins: [
      ElementPlusAlias(),
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false
          }),
          vueJsx: vueJsx()
        }
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }) as any,
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        }
      })
    ]
  })
  console.log(input)
}