import { defineAsyncComponent, ref } from "vue"
import menu from "./menu"
export const usePublish = () => {
  const name = ref('java'), com = import.meta.glob('./module/*.vue');
  function loadComponent(id: string) {
    var path = `./module/${id}.vue`, m = com[path] || com['./module/def.vue']
    return defineAsyncComponent(() => m().then((c: any) => c.default));
  }
  function changePage(data: any) {
    if (data.path) {
      name.value = data.id
    }
  }
  return {
    menu,
    name,
    loadComponent,
    changePage
  }
}

