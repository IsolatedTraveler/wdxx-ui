import { SetupContext, defineAsyncComponent, ref, watch } from "vue";
import { LoadEmits, LoadProps } from "./load";
import { useUserStore } from "@/store";
const userStore = useUserStore()
function setTemp(v: string, key?: string) {
  if (key) {
    userStore.setTemp({ [key]: v })
  }
}
export function useLoad(props: LoadProps, _emit: SetupContext<LoadEmits>['emit']) {
  const val = ref('')
  watch(() => props.ly, (v) => {
    if (v) {
      val.value = userStore.temp[v]
    }
  }, { immediate: true })
  watch(() => val.value, (v) => {
    v && setTemp(v, props.ly)
  })
  function loadComponent() {
    var id = val.value, path = `./module/${id}.vue`, path1 = `./module/${id}/index.vue`, com: any = props.com
      , m = com[path] || com[path1] || com['./module/def.vue']
    return defineAsyncComponent(() => {
      if (m) {
        return m().then((c: any) => c.default)
      } else {
        return import('./def.vue').then((c: any) => c.default)
      }
    })
  }
  return {
    loadComponent,
    val
  }
}