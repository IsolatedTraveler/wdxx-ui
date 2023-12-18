import { RouteRecordRaw } from 'vue-router'
export interface Routes {
  [key: string]: RouteRecordRaw
}
import { useLoadStore } from "@/store"
const xtmReg = /(^[a-z]+|[A-Z0-9][a-z0-9]+)/g
let base
export function getRoute(data: unknown, xtm: string, wjm: string, dq: string = 'index') {
  if (!base) {
    base = useLoadStore()
  }
  const Wjm = wjm.slice(0, 1).toUpperCase() + wjm.slice(1), root = base.getRoot || '', name = xtm + Wjm
  data[wjm] = {
    name,
    path: root + name,
    component: () => import(`@view/${xtm}/view/${wjm}/${dq}.vue`)
  }
}
export function getXtm(to) {
  if (to.name) {
    return (to.name as string).match(xtmReg)[0]
  } else if (to.path) {
    var path = (to.path as string).split('/'), first = (path.shift() || path.shift()).match(xtmReg)[0]
    return first === 'base' && path[0] ? path[0].match(xtmReg)[0] : first
  } else {
    console.warn('路由解析出错，暂不支持该跳转模式')
  }
}