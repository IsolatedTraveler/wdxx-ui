import { defineConfig } from 'vite'
import { build, plugins, server, css, resolve } from './config'
export default defineConfig({
  base: './',
  optimizeDeps: {
    include: []
  },
  build,
  resolve,
  plugins,
  css,
  server
})
