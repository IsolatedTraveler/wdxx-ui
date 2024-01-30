import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import router, { getXtm } from './index'
import { useLoadStore } from '@/store'
interface XtMenu {
  resolve: any
  to?: RouteLocationNormalized
}
interface LoadXts {
  [key: string]: XtMenu
}
function addRoute(routes, name) {
  name ? router.addRoute(name, routes) : router.addRoute(routes)
}
function addRoutes(routes) {
  const name = useLoadStore().getRoot ? '' : 'baseMenu'
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
    to && router.replace(to)
  })
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