import { ref, defineAsyncComponent } from "vue"
import menu from "./menu"
export const usePublish = () => {
  const name = ref('java'), com = {} as any;
  (function loadComponents(m = menu) {
    m.forEach(it => {
      if (it.child) {
        loadComponents(it.child)
      } else if (it.path) {
        com[it.id] = defineAsyncComponent(() => import('./module/' + it.id + '.vue'))
      }
    })
  })();
  return {
    menu,
    name,
    com
  }
}