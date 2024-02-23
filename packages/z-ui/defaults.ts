import { App } from "vue"
import components from "./component"
import directives from "@ui/utils/directive"
const INSTALLED_KEY = Symbol('INSTALLED_KEY')
import { version } from './version'
interface AppE extends App {
  [INSTALLED_KEY]?: boolean
}
export default {
  install(app: App) {
    if ((app as AppE)[INSTALLED_KEY]) return
    (app as AppE)[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
    directives.forEach((c) => app.use(c))
  },
  version
}