import { localGet } from "@/api";
import { ObjAny } from "@ui/vars";
import { defineAsyncComponent, ref } from "vue";
interface LoadSlwdDataProp {
  title: string
  sm: string
  code?: string
}
export interface LoadSlwdData {
  name: string
  prop: LoadSlwdDataProp
  load?: boolean
}
// 加载示例文档
export function loadSlwd(coms: ObjAny, val: Array<LoadSlwdData>, zjName: string, ml: string = 'vue/kfwd/ZUi') {
  const data = ref(val)
  val = data.value
  function loadComponent(name: string, i: number) {
    const m = coms[`./${name}.vue`]
    if (m) {
      const v = val[i]
      if (!v.load) {
        v.load = true
        localGet(`${ml}/${zjName}/${name}.text`).then((res) => {
          v.prop.code = res
        })
      }
      return defineAsyncComponent(() => m().then((c: any) => c.default))
    } else {
      return defineAsyncComponent(() => import('@/components/base/load-com/def.vue'))
    }
  }
  return { data, loadComponent }
}