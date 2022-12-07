import { ComponentColAlignT, ComponentSelfAlignT, ObjStr, ComponentRowAlignT, ObjTrue, PKG_PREFIX } from "@ui/vars"
import { watch } from "vue"
export interface flexProp {
  row?: ComponentRowAlignT
  col?: ComponentColAlignT
  self?: ComponentSelfAlignT
  wrap?: Boolean
}
export const setCss = (name: string) => {
  return name ? (PKG_PREFIX + '-' + name) : ''
}
export const useSingle = (props:any, obj: ObjStr, classVal: ObjTrue, key:string) => {
  watch(() => props[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = setCss(v)
      classVal[obj[key]] = true
    }
  }, {immediate: true})
}

export const useFlexCss = (props:any, obj: ObjStr, classVal: ObjTrue) => {
  ['flex', 'rowAlign', 'colAlign', 'self'].forEach(key => {
    useSingle(props, obj, classVal, key)
  })
}
