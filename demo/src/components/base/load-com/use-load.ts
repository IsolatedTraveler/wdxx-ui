import { SetupContext, defineAsyncComponent, ref, shallowRef, watch } from "vue";
import { LoadEmits, LoadProps } from "./load";
import { useUserStore } from "@/store";
const userStore = useUserStore()
function setTemp(v: string, key?: string) {
  if (key) {
    userStore.setTemp({ [key]: v })
  }
}
export function useLoad(props: LoadProps, _emit: SetupContext<LoadEmits>['emit']) {
  const val = ref(''), com = shallowRef<any>(null)
  watch(() => props.ly, (v) => {
    if (v) {
      val.value = userStore.temp[v]
      loadComponent()
    }
  }, { immediate: true })
  function loadComponent() {
    var id = val.value, path = `./module/${id}.vue`, path1 = `./module/${id}/index.vue`, coms: any = props.com
      , m = coms[path] || coms[path1] || coms['./module/def.vue']
    com.value = defineAsyncComponent(() => {
      if (m) {
        return m().then((c: any) => c.default)
      } else {
        return import('./def.vue').then((c: any) => c.default)
      }
    })
  }
  function checked(it: any) {
    if (it.path) {
      setTemp(it.id, props.ly)
      loadComponent()
    }
  }
  return {
    com,
    val,
    checked
  }
}