import { Routes, getRoute } from "@/router"
const routes: Routes = {}
export const xtm = 'sjcl'
getRoute(routes, xtm, '404')
getRoute(routes, xtm, 'excelToDataBase')
export default routes