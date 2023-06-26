import { INSTALLED_KEY } from "@ui/vars"
import { App } from "vue"
import components from "./component"
import { version } from './version'
interface AppE extends App {
  [INSTALLED_KEY]?: boolean
}
export default {
  install(app: App) {
    if ((app as AppE)[INSTALLED_KEY]) return
    (app as AppE)[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  },
  version
}