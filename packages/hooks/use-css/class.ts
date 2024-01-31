import { watch } from "vue"
import { useCssName } from "./name"

export function useCssClassAdd(props: any, key: string, classVal: any, obj: any, def: string = '') {
  watch(() => props?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = useCssName(key + '--' + (v == true ? def : v))
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}
export function useCssClass(props: any, key: string, classVal: any, obj: any, def: string = '') {
  watch(() => props?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = useCssName(v == true ? def : v)
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}