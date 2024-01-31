import { PropsBaseRadius } from "@ui/props";
import { Ref, watch } from "vue";
import { useCssName } from "../use-css";
import { ComponentRadius } from "@ui/vars";
import { getStylePx } from "../use-css";
import { nextTick } from "process";
export const propsRadiusMixins = {
  radius: PropsBaseRadius
}
function getMax(a: number, b: number) {
  return a > b ? a : b
}
export const useRadiusMixins = function (props: any, classVal: any, styleVal: any, el: Ref<any>) {
  let last: string
  watch(() => props.radius, (v) => {
    let judge = ComponentRadius.includes(v)
    if (last) {
      classVal[last] = false
      styleVal.width = undefined
      styleVal.height = undefined
    }
    if (judge) {
      last = useCssName(v)
      classVal[last] = true
      if (v === 'circle') {
        nextTick(() => {
          const elem = el.value, max = getMax(elem?.offsetWidth, elem?.offsetHeight)
          styleVal.width = styleVal.height = getStylePx(max)
        })
      }
    } else {
      styleVal.borderRadius = getStylePx(v)
    }
  }, { immediate: true })
}