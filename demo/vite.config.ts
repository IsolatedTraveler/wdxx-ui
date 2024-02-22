import { defineConfig } from 'vite'
import { build, plugins, server, css, resolve } from './config'
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  },
  base: './',
  optimizeDeps: {
    include: ['vue', '@vue/shared']
  },
  build,
  resolve,
  plugins,
  css,
  server
})
