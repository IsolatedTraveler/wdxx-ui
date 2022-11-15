import path from 'path'
import type { ModuleFormat } from 'rollup'
import {epOutput} from './path'

export const target = 'es2018'
export const PKG_PREFIX = '@wdxx-ui'
export const PKG_NAME = 'wdxx-ui'
export const PKG_CAMELCASE_NAME = 'WdxxUi'
export const PKG_CAMELCASE_LOCAL_NAME = 'WdxxUiLocale'
export const PKG_BRAND_NAME = 'Wdxx Ui'


export const modules = ['esm', 'cjs'] as const
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    name: string
    path: string
  }

  bundle: {
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