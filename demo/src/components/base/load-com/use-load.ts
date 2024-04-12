import { SetupContext, defineAsyncComponent, ref, shallowRef, watch } from "vue";
import { LoadEmits, LoadProps } from "./load";
import { useUserStore } from "@/store";
const userStore = useUserStore(), err = ref('')
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
      , m = coms[path] || coms[path1]
    com.value = defineAsyncComponent(() => {
      if (m) {
        err.value = ''
        return m().then((c: any) => c.default)
      } else {
        err.value = '未找到该解决方案，请检查以下路径【' + path + ',' + path1 + '】是否存在相关文件'
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
    checked,
    err
  }
}