import { defineAsyncComponent, ref } from "vue"
import menu from "./menu"
import { useUserStore } from "@/store";
export const usePublish = () => {
  const userStore = useUserStore(), com = import.meta.glob('./module/*.vue')
    , def = userStore.temp.gswdPublish || 'nginx'
    , name = ref(def);
  function loadComponent(id: string) {
    var path = `./module/${id}.vue`, m = com[path] || com['./module/def.vue']
    return defineAsyncComponent(() => m().then((c: any) => c.default));
  }
  function changePage(data: any) {
    if (data.path) {
      userStore.setTemp({ gswdPublish: data.id })
      name.value = data.id
    }
  }
  return {
    menu,
    name,
    def,
    loadComponent,
    changePage
  }
}

