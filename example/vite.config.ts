import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import VueMacros from 'unplugin-vue-macros/vite'
import esbuild from 'rollup-plugin-esbuild'
import type { Plugin } from 'vite'

const esbuildPlugin = (): Plugin => ({
  ...esbuild({
    target: 'chrome64',
    include: /\.vue$/,
    loaders: {
      '.vue': 'js',
    },
  }),
  enforce: 'post',
})
export default defineConfig(async () => {
  return {
    server: {
      host: true,
      https: false,
      hmr: true
    },
    optimizeDeps: {
      include: ['vue', '@vue/shared']
    },
    esbuild: {
      target: 'chrome64'
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue(),
          vueJsx: vueJsx()
        }
      }),
      esbuildPlugin(),
      Components({
        include: `${__dirname}/**`,
        resolvers: ElementPlusResolver({ importStyle: 'sass' }),
        dts: false
      }),
      mkcert(),
      Inspect()
    ]
  }
})
