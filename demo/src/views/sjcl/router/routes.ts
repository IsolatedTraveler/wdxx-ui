import { Routes, getRoute } from "@/router"
const routes: Routes = {}
export const xtm = 'qtxt'
getRoute(routes, xtm, '404')
getRoute(routes, xtm, 'home')
getRoute(routes, xtm, 'load')
getRoute(routes, xtm, 'login')
getRoute(routes, xtm, 'menu')
getRoute(routes, xtm, 'dmgl')
export default routes