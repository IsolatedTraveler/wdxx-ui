import { createRouter, createWebHashHistory } from "vue-router"
import { getJsUrl } from "@/assets/js"
import routes from './def'
import { checkLogin } from "./checkLogin"
import { loadXt } from "./404"
export { loadXt } from './404'
export const router = createRouter({
  history: createWebHashHistory(getJsUrl()),
  routes
})
router.beforeEach((to, _from, next) => {
  if (to.path) {
    if (checkLogin(to)) {
      const pro = Object.values(loadXt).filter(it => it)
      if (pro.length) {
        Promise.all(pro.map(it => it.resolve)).then(() => next())
      } else {
        next()
      }
    } else {
      next({ path: '/baseLogin' })
    }
  } else {
    console.error('为保证系统兼容性，暂只支持name跳转，不支持其他模式跳转')
  }
})
export default router as typeof router