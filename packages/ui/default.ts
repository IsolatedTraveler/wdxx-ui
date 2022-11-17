import components from './component'
import type { App, Plugin } from "@vue/runtime-core";
export default {
  install(app: App) {
    components.forEach(c => app.use(c))
  }
} as Plugin