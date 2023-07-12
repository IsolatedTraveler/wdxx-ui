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
export const useSingle = (props: ComputedRef<any>, obj: ObjStr, classVal: ObjTrue, key: string, name: string = '') => {
  name == 'call-kit' && console.log(key, name, props.value)
  watch(() => props.value?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {

      obj[key] = setCss(name + (name ? '--' : '') + (v === true ? key : v))
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}

export const useFlexCss = (props: ComputedRef<any>, obj: ObjStr, classVal: ObjTrue, key, name, styleVal, el) => {
  useSingle(props, obj, classVal, 'flex');
  ['justify', 'align', 'self'].forEach(key => {
    useSingle(props, obj, classVal, key, key)
  })
  watch(() => props?.value?.auto, (v) => {
    styleVal.flexGrow = v ? v : undefined
  }, { immediate: true })
  watch(() => props?.value?.left, (v) => {
    styleVal.marginLeft = v ? (v + '%') : undefined
  }, { immediate: true })
  watch(() => props?.value?.right, (v) => {
    styleVal.marginRight = v ? (v + '%') : undefined
  }, { immediate: true })
  watch(() => props?.value?.span, (v) => {
    styleVal.flexBase = v ? (v + '%') : undefined
  }, { immediate: true })
  watch(() => props?.value?.order, (v) => {
    styleVal.order = v || undefined
  }, { immediate: true })
}
