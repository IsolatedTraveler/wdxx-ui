import { ComponentColAlignT, ComponentSelfAlignT, ObjStr, ComponentRowAlignT, ObjTrue } from "@ui/vars"
import { ComputedRef, watch } from "vue"
import { useCssName } from "../name"

export interface flexProp {
  row?: ComponentRowAlignT
  col?: ComponentColAlignT
  self?: ComponentSelfAlignT
  wrap?: Boolean
}
export const useSingle = (props: ComputedRef<any>, obj: ObjStr, classVal: ObjTrue, key: string, name: string = '') => {
  name == 'call-kit' && console.log(key, name, props.value)
  watch(() => props.value?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {

      obj[key] = useCssName(name + (name ? '--' : '') + (v === true ? key : v))
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}
