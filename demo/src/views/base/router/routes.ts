import { RouteRecordRaw } from "vue-router"
interface Routes {
  [key: string]: RouteRecordRaw
}
export default {
  baseLogin: {
    name: 'baseLogin',
    path: 'login',
    component: () => import('@base/login/index.vue')
  }
} as Routes