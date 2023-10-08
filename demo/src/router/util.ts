import { RouteRecordRaw } from 'vue-router'
export interface Routes {
  [key: string]: RouteRecordRaw
}
import { useBaseStore } from "@/store"
const base = useBaseStore()
export function getRoute(data: unknown, xtm: string, wjm: string, dq: string = 'index') {
  const Wjm = wjm.slice(0, 1).toUpperCase() + wjm.slice(1), root = base.getRoot || '', name = xtm + Wjm
  data[wjm] = {
    name,
    path: root + name,
    component: () => import(`@view/${xtm}/view/${wjm}/${dq}.vue`)
  }
}