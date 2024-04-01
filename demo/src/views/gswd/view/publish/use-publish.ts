import { defineAsyncComponent, ref } from "vue"
import { useUserStore } from "@/store";
export const usePublish = (com: any, ly = 'gswd', lyDef = 'nginx') => {
  const userStore = useUserStore(), def = userStore.temp[ly] || lyDef
    , name = ref(def), defVue = import.meta.glob('./module/def.vue');
  function loadComponent(id: string) {
    var path = `./module/${id}.vue`, path1 = `./module/${id}/index.vue`, m = com[path] || com[path1] || com['./module/def.vue'] || defVue['./module/def.vue']
    return defineAsyncComponent(() => m().then((c: any) => c.default));
  }
  function changePage(data: any) {
    if (data.path) {
      userStore.setTemp({ [ly]: data.id })
      name.value = data.id
    }
  }
  return {
    name,
    def,
    loadComponent,
    changePage
  }
}

