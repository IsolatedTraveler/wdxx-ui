import { getRoute } from "@/assets/js/router"
import { RouteRecordRaw } from "vue-router"
interface Routes {
  [key: string]: RouteRecordRaw
}
const routes: Routes = {}, xtm = 'qtxt'
getRoute(routes, xtm, '404')
getRoute(routes, xtm, 'home')
getRoute(routes, xtm, 'load')
getRoute(routes, xtm, 'login')
getRoute(routes, xtm, 'menu')
export default routes