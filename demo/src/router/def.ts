import { RouteRecordRaw } from 'vue-router'
import { checkLogin } from './checkLogin'
import loadMenu from './404'
export default [
  {
    path: '/',
    redirect() {
      if (checkLogin()) {
        return { path: '/baseMenu' }
      } else {
        return { path: '/baseLogin' }
      }
    }
  },
  loadMenu
] as RouteRecordRaw[]
