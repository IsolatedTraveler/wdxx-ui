import { RouteRecordRaw } from 'vue-router'
import { checkLogin } from './checkLogin'
import loadMenu from './404'
export default [
  {
    path: '/',
    redirect() {
      if (checkLogin()) {
        return { name: '/base/home' }
      } else {
        return { name: '/base/login' }
      }
    }
  },
  loadMenu
] as RouteRecordRaw[]
