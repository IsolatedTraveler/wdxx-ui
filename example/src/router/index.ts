import { createRouter, createWebHistory } from "vue-router"
import def from './def/index'
let baseUrl:string
export function getJsUrl() {
  if (!baseUrl) {
    let elem = document.currentScript
    if (!elem) {
      elem = document.scripts[0]
    }
    baseUrl = new URL((elem as HTMLScriptElement).src.split('/js/')[0]).pathname
  }
  return baseUrl
}
export let loadXt: any = {}
const router: any = createRouter({
  history: createWebHistory(getJsUrl()),
  routes: [
    {
      path: '/',
      redirect: '/base'
    }, 
    {path: '/:pathMatch(.*)*', redirect: '/404'},
    {path: '/404', name: '404', meta: {notAuth: true}, component:() => import('../views/404.vue')},
    ...def
  ]
})
export default router as typeof router