import { ref, Ref, ComputedRef } from "vue"
import { useFlexCss, useSingle } from "./flex"
import radius from "./radius"
import useGroup from "./group"
export {setCss} from './flex'
const cssV:any = {
  flex: useFlexCss,
  def: useSingle,
  group: useGroup,
  radius
}
export const useCss = (props:ComputedRef<any>, el: Ref<any>, keys: Array<string> = Object.keys(props.value)) => {
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