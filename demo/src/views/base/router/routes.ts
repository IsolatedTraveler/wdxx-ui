import { RouteRecordRaw } from "vue-router"
interface Routes {
  [key: string]: RouteRecordRaw
}
export default {
  base404: {
    name: 'base404',
    path: '/base404',
    meta: { login: true },
    component: () => import('@base/404/index.vue')
  },
  baseHome: {
    name: 'baseHome',
    path: '/baseHome',
    component: () => import('@base/home/index.vue')
  },
  baseLoad: {
    name: 'baseLoad',
    path: '/baseLoad',
    component: () => import('@base/load/index.vue')
  },
  baseLogin: {
    name: 'baseLogin',
    path: '/baseLogin',
    meta: { login: true },
    component: () => import('@base/login/index.vue')
  },
  baseMenu: {
    name: 'baseMenu',
    path: '/baseMenu',
    component: () => import('@base/menu/index.vue')
  }
} as Routes