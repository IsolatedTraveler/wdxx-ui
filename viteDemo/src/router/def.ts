import { RouteRecordRaw } from 'vue-router'
import { checkLogin } from './checkLogin'
import loadMenu from './404'
export interface Routes {
  [key: string]: RouteRecordRaw
}
export default [
  {
    path: '/',
    redirect() {
      console.log(checkLogin())
      if (checkLogin()) {
        return { path: '/baseMenu' }
      } else {
        return { path: '/baseLogin' }
      }
    }
  },
  loadMenu
] as RouteRecordRaw[]
