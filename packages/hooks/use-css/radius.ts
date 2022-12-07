import { isNumber } from "@ui/utils"
import { ComponentRadius, ObjStr, ObjTrue } from "@ui/vars"
import { watch, nextTick, Ref } from "vue"
import { setCss } from "./flex"
export const getStylePx = (v:string | number) => {
  if (v === 'none') {
    v = '0px'
  } else if (isNumber(v)) {
    v = (Number(v) / 100) + 'rem'
  }
  return v
}
function getMax(a: number, b: number) {
  return a > b ? a : b
}
export default (props:any, obj: ObjStr, classVal: ObjTrue, styleVal: any, el: Ref<any>) => {
  watch(() => props.radius, (v, o) => {
    if (o) {
      classVal[obj.radius] = false
      if (o === 'circle') {
        styleVal.width = false
        styleVal.height = false
      }
    }
    if (v) {
      if (ComponentRadius.includes(v) && v !== 'none') {
        obj.radius = setCss(v)
        classVal[obj.radius] = true
        if (v === 'circle') {
          nextTick(() => {
            const elem = el.value, max = getMax(elem?.offsetWidth, elem?.offsetHeight)
            styleVal.width = styleVal.height = getStylePx(max)
          })
        }
      } else {
        styleVal.borderRadius = getStylePx(v)
      }
    } else {
      styleVal.borderRadius = false
    }
  }, {immediate: true})
}