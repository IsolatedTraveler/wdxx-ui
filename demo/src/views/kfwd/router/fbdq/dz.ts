import { Routes, getRoute } from "@/router"
import { xtm } from "../routes"
const routes: Routes = {}
getRoute(routes, xtm, '404')
export default {
  dz: routes
}