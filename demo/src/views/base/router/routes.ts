import { RouteRecordRaw } from "vue-router"
interface Routes {
  [key: string]: RouteRecordRaw
}
export default {
  baseLogin: {
    name: 'baseLogin',
    path: '/baseLogin',
    component: () => import('@base/login/index.vue')
  },
  baseHome: {
    name: 'baseHome',
    path: '/baseHome',
    component: () => import('@base/home/index.vue')
  }
} as Routes