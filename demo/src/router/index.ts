import { createRouter, createWebHashHistory } from "vue-router"
import { getJsUrl } from "@/assets/js"
import routes from './def'
import { checkLogin } from "./checkLogin"
import { loadXt } from "./404"
export * from './util'
export const router = createRouter({
  history: createWebHashHistory(getJsUrl()),
  routes
})
router.beforeEach((to, _from, next) => {
  console.log(router.getRoutes())
  if (checkLogin(to)) {
    const pro = Object.values(loadXt).filter(it => it)
    if (pro.length) {
      Promise.all(pro.map(it => it.resolve)).then(() => {
        next()
      })
    } else {
      next()
    }
  } else {
    next({ path: '/baseLogin' })
  }
})
export { loadXtxx } from "./404"
export default router as typeof router