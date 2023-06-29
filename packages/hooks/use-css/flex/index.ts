import { ComponentColAlignT, ComponentSelfAlignT, ObjStr, ComponentRowAlignT, ObjTrue, PKG_PREFIX } from "@ui/vars"
import { ComputedRef, watch } from "vue"
export interface flexProp {
  row?: ComponentRowAlignT
  col?: ComponentColAlignT
  self?: ComponentSelfAlignT
  wrap?: Boolean
}
export const setCss = (name: string) => {
  return name ? (PKG_PREFIX + '-' + name) : ''
}
export const useSingle1 = (props: ComputedRef<any>, obj: ObjStr, classVal: ObjTrue, key: string, name: string = '') => {
  watch(() => props.value?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = setCss(name + '--' + (v === true ? key : v))
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}
export const useSingle = (props: ComputedRef<any>, obj: ObjStr, classVal: ObjTrue, key: string) => {
  watch(() => props.value?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = setCss(v === true ? key : v)
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}

export const useFlexCss = (props: ComputedRef<any>, obj: ObjStr, classVal: ObjTrue) => {
  ['flex', 'rowAlign', 'colAlign', 'self'].forEach(key => {
    useSingle(props, obj, classVal, key)
  })
}
