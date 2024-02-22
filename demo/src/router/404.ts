import { RouteRecordRaw, RouteLocationNormalized, RouteLocation } from 'vue-router'
import router, { getXtm } from './index'
import { useLoadStore } from '@/store'
interface XtMenu {
  resolve: any
  to?: RouteLocationNormalized
}
interface LoadXts {
  [key: string]: XtMenu
}
function addRoute(routes: RouteRecordRaw, name: string = '') {
  name ? router.addRoute(name, routes) : router.addRoute(routes)
}
function addRoutes(routes: RouteRecordRaw) {
  const name = useLoadStore().getRoot ? '' : 'baseMenu'
  if (Array.isArray(routes)) {
    routes.forEach(it => {
      addRoute(it, name)
    })
  } else {
    addRoute(routes, name)
  }
}
function xtxxLoad(xt: string, to: RouteLocation | undefined) {
  return Promise.all([
    import(`@view/${xt}/router/index.ts`).then(({ default: res }) => {
      return res().then(addRoutes)
    })
  ]).then(() => {
    to && router.replace(to)
  })
}

export function loadXtxx(xt: string, to?: RouteLocation) {
  isLoadXt[xt] = true
  loadXt[xt] = {
    resolve: xtxxLoad(xt, to),
    to
  }
  return loadXt[xt].resolve
}
interface IsLoadXt {
  [key: string]: boolean
}
export const loadXt: LoadXts = {}, isLoadXt: IsLoadXt = {}
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