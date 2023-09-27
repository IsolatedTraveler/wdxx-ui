import { getJsUrl } from "@/assets/js"
import { createRouter, createWebHashHistory } from "vue-router"
import routes from './default'
import { useBaseStore } from "@/store"
export const router = createRouter({
  history: createWebHashHistory(getJsUrl()),
  routes
})
router.beforeEach((to, from, next) => {
  let baseStore = useBaseStore(), back = baseStore.getBack
  if (back && typeof back === 'function') {
    back()
    next(false)
  } else {
    baseStore.setFrom({ name: from.name, query: from.query, to: to.name })
    next()
  }
})