import { ref, Ref } from "vue"
import { useFlexCss, useSingle } from "./flex"
import radius from "./radius"
export {setCss} from './flex'
const cssV:any = {
  flex: useFlexCss,
  def: useSingle,
  radius
}
export const useCss = (props:any, el: Ref<any>, keys: Array<string> = Object.keys(props)) => {
  const _class = ref({}), _style = ref({}), obj = {}, classVal = _class.value, styleVal = _style.value
  keys.forEach(key => {
    if (cssV[key]) {
      cssV[key](props, obj, classVal, styleVal, el)
    } else {
      cssV.def(props, obj, classVal, key)
    }
  })
  return {_class, _style}
}