import { ref } from "vue"
import { useFlexCss, useSingle } from "./flex"
const cssV:any = {
  flex: useFlexCss,
  def: useSingle
}
export const useCss = (props:any, keys: Array<string>, val: string) => {
  const _class = ref({[val]: true}), _style = ref({}), obj = {}, classVal = _class.value, styleVal = _style.value
  keys.forEach(key => {
    if (cssV[key]) {
      cssV[key](props, obj, classVal, styleVal)
    } else {
      cssV.def(props, obj, classVal, key)
    }
  })
  return {_class, _style}
}