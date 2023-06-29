import { ref, Ref, ComputedRef } from "vue"
import { useFlexCss, useSingle, useSingle1 } from "./flex"
import radius from "./radius"
import { ObjStr } from "@ui/vars"
export { setCss } from './flex'
export { getStylePx } from './radius'
const cssV: any = {
  flex: useFlexCss,
  comCss: useSingle1,
  radius,
  def: useSingle
}
export const useCss = (props: ComputedRef<any>, el: Ref<any>, judge?: ObjStr, keys: Array<string> = Object.keys(props.value)) => {
  const _class = ref({}), _style = ref({}), obj = {}, classVal = _class.value, styleVal = _style.value
  keys.forEach(key => {
    if (judge?.[key] && cssV[judge?.[key]]) {
      cssV[judge[key]](props, obj, classVal, key, props?.value?.name, styleVal, el)
    } else if (cssV[key]) {
      cssV[key](props, obj, classVal, key, props?.value?.name, styleVal, el)
    } else {
      cssV.def(props, obj, classVal, key, props?.value?.name)
    }
  })
  return { _class, _style }
}