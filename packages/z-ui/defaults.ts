import { INSTALLED_KEY } from "@ui/vars"
import { App } from "vue"
import components from "./component"
import { version } from './version'
export default {
  install(app: App) {
    if (app[INSTALLED_KEY]) return
    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  },
  version
}