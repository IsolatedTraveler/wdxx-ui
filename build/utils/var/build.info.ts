import path from 'path'
import type { ModuleFormat } from 'rollup'
import {epOutput} from './path'

export const target = 'es2018'
export const PKG_PREFIX = '@element-plus'
export const PKG_NAME = 'element-plus'
export const PKG_CAMELCASE_NAME = 'ElementPlus'
export const PKG_CAMELCASE_LOCAL_NAME = 'ElementPlusLocale'
export const PKG_BRAND_NAME = 'Element Plus'


export const modules = ['esm', 'cjs'] as const
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    /** e.g: `es` */
    name: string
    /** e.g: `dist/element-plus/es` */
    path: string
  }

  bundle: {
    /** e.g: `element-plus/es` */
    path: string
  }
}
export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(epOutput, 'es')
    },
    bundle: {
      path: `${PKG_NAME}/es`,
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(epOutput, 'lib')
    },
    bundle: {
      path: `${PKG_NAME}/lib`
    }
  }
}

export type Module = typeof modules[number]
export type BuildConfig = typeof buildConfig