import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import esbuild from 'rollup-plugin-esbuild'
import { PluginOption, Plugin } from 'vite'
const esbuildPlugin = (): Plugin => ({
  ...esbuild({
    target: 'chrome64',
    include: /.vue/,
    loaders: {
      '.vue': 'js',
    },
  }),
  enforce: 'post'
})
export const plugins: PluginOption[] = [
  vue(),
  esbuildPlugin(),
  Inspect()
]