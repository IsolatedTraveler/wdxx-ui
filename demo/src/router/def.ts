import { RouteRecordRaw } from 'vue-router'
import { checkLogin } from './checkLogin'
import loadMenu from './404'
export default [
  {
    path: '/',
    redirect() {
      if (checkLogin()) {
        return { name: 'baseHome' }
      } else {
        return { name: 'baseLogin' }
      }
    }
  },
  loadMenu
] as RouteRecordRaw[]
