import { ref, Ref } from "vue"
import { useFlexCss, useSingle } from "./flex"
import radius from "./radius"
const cssV:any = {
  flex: useFlexCss,
  def: useSingle,
  radius
}
export const useCss = (props:any, keys: Array<string>, val: string, el: Ref<any>) => {
  const _class = ref({[val]: true}), _style = ref({}), obj = {}, classVal = _class.value, styleVal = _style.value
  keys.forEach(key => {
    if (cssV[key]) {
      cssV[key](props, obj, classVal, styleVal, el)
    } else {
      cssV.def(props, obj, classVal, key)
    }
  })
  return {_class, _style}
}