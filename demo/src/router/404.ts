import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import router from './index'
import { useBaseStore } from '@/store'
interface XtMenu {
  resolve: any
  to?: RouteLocationNormalized
}
interface LoadXts {
  [key: string]: XtMenu
}
const xtmReg = /(^[a-z]+|[A-Z0-9][a-z0-9]+)/g
function addRoute(routes, name) {
  name ? router.addRoute(name, routes) : router.addRoute(routes)
}
function addRoutes(routes) {
  const name = useBaseStore().getRoot ? '' : 'baseMenu'
  if (Array.isArray(routes)) {
    routes.forEach(it => {
      addRoute(it, name)
    })
  } else {
    addRoute(routes, name)
  }
}
function xtxxLoad(xt, to) {
  return Promise.all([
    import(`@view/${xt}/router/index.ts`).then(({ default: res }) => {
      return res().then(addRoutes)
    })
  ]).then(() => {
    console.log(router.getRoutes(), to)
    to && router.replace(to)
  })
}
function getXtm(to) {
  if (to.name) {
    return (to.name as string).match(xtmReg)[0]
  } else if (to.path) {
    var path = (to.path as string).split('/'), first = (path.shift() || path.shift()).match(xtmReg)[0]
    return first === 'base' && path[0] ? path[0].match(xtmReg)[0] : first
  } else {
    console.warn('路由解析出错，暂不支持该跳转模式')
  }
}
export function loadXtxx(xt: string, to?) {
  isLoadXt[xt] = true
  loadXt[xt] = {
    resolve: xtxxLoad(xt, to),
    to
  }
  return loadXt[xt].resolve
}
export const loadXt: LoadXts = {}, isLoadXt = {}
export default {
  path: '/:pathMatch(.*)*',
  redirect(to) {
    const xt = getXtm(to)
    if (xt && isLoadXt[xt]) {
      if (loadXt[xt]) {
        loadXt[xt].to = to
      } else {
        return { path: '/base404' }
      }
    } else {
      loadXtxx(xt, to)
    }
    return { path: '/baseLoad' }
  }
} as RouteRecordRaw