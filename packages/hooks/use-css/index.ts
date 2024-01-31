import { ref, Ref, ComputedRef } from "vue"
import { useSingle } from "./flex"
import { ObjAny, ObjStrBool } from "@ui/vars"
export { useCssName } from './name'
import { isNumber } from "@ui/utils"
export const getStylePx = (v: string | number): string => {
  if (v === 'none') {
    v = '0px'
  } else if (isNumber(v)) {
    v += 'px'
  }
  return v as string
}
const cssV: any = {
  def: useSingle
}
export const useCss = (props: ComputedRef<any>, el: Ref<any>, judge?: ObjStrBool, keys: Array<string> = Object.keys(props.value)) => {
  const _class = ref({}), _style = ref({} as ObjAny), obj = {}, classVal = _class.value, styleVal = _style.value
  keys.forEach(key => {
    var funKey = judge?.[key]
    if (funKey === false) {
      return
    }
    funKey = (funKey || key) as string
    if (funKey === 'comCss') {
      useSingle(props, obj, classVal, key, props?.value?.name)
    } else if (cssV[funKey]) {
      cssV[funKey](props, obj, classVal, key, props?.value?.name, styleVal, el)
    } else {
      useSingle(props, obj, classVal, key)
    }
  })
  return { _class, _style }
}