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
  console.log(routes, name)
  name ? router.addRoute(name, routes) : router.addRoute(routes)
}
function addRoutes(routes) {
  const name = useBaseStore().getRoot ? '' : 'menu'
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
      return res().then(addRoutes).then(() => {
        to && router.replace(to)
      })
    })
  ])
}
function getXtm(to) {
  if (to.name) {
    return (to.name as string).match(xtmReg)[0]
  } else if (to.path) {
    var path = (to.path as string).split('/'), first = (path[0] || path[1]).match(xtmReg)[0]
    return first === 'base' ? (path[0] || first) : first
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
    console.log('404')
    const xt = getXtm(to)
    console.log('getXtm:', xt)
    if (xt && isLoadXt) {
      if (loadXt[xt]) {
        loadXt[xt].to = to
      } else {
        console.warn('未找到该菜单')
        return { path: 'base404' }
      }
    } else {
      loadXtxx(xt, to)
    }
    return { path: 'baseLoad' }
  }
} as RouteRecordRaw