import { defineAsyncComponent, ref } from "vue"
import menu from "./data/menu"
import { useUserStore } from "@/store";
export const useYwcs = () => {
  const userStore = useUserStore(), com = import.meta.glob('./module/*.vue')
    , def = userStore.temp.gswd || 'nm-hlyy'
    , name = ref(def);
  function loadComponent(id: string) {
    var path = `./module/${id}.vue`, m = com[path] || com['./module/def.vue']
    return defineAsyncComponent(() => m().then((c: any) => c.default));
  }
  function changePage(data: any) {
    if (data.path) {
      userStore.setTemp({ gswd: data.id })
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

