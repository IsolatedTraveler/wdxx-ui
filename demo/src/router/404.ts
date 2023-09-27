import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import router from './index'
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
function addRoutes(routes, name?) {
  if (Array.isArray(routes)) {
    routes.forEach(it => {
      addRoute(it, name)
    })
  } else {
    addRoute(routes, name)
  }
}
function xtxxLoad(xt) {
  return Promise.all([
    import(`@view/${xt}/router/index.ts`).then(({ default: res }) => {
      return res().then(addRoutes)
    })
  ])
}
function getXtxx(xt) {
  if (isLoadXt['base'] || xt == 'base') {
    return xtxxLoad(xt)
  } else {
    return Promise.all([
      xtxxLoad('base'),
      xtxxLoad(xt)
    ])
  }
}
function loadXtxx(xt: string) {
  if (isLoadXt[xt]) {
    if (!loadXt[xt]) {
      console.error('未获取到该菜单')
      return { name: 'base404' }
    }
  } else {
    isLoadXt[xt] = false
    loadXt[xt] = {
      resolve: getXtxx(xt)
    }
  }
}
export const loadXt: LoadXts = {}, isLoadXt = {}
export default {
  path: '/:pathMatch(.*)*',
  redirect(to) {
    const xt = (to.name as string).match(/(^[a-z]+|[A-Z][a-z]+)/g)[0]
    if (xt) {
      loadXtxx(xt)
      loadXt[xt].to = to
    } else {
      console.error('系统信息获取失败')
    }
    if (xt && isLoadXt[xt]) {

    }
  }
} as RouteRecordRaw