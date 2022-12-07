import { ref } from "vue"
import { useFlexCss, useSingle } from "./flex"
const cssV:any = {
  flex: useFlexCss,
  def: useSingle
}
export const useCss = (props:any, keys: Array<string>, val: string) => {
  const _class = ref({[val]: true}), _style = ref({}), obj = {}, classVal = _class.value, styleVal = _style.value
  keys.forEach(key => {
    (cssV[key] || cssV.def)(props, obj, classVal, styleVal)
  })
  return {_class, _style}
}