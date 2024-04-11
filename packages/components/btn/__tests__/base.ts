import { comClass, comMount, comAttr, ComAttrParam, comStyle, comSonStyle, comSonClass } from "../../../__test__/com"
import ZBtn from "../src/btn.vue"

const defSlot = '按钮'
export function comBaseClass(prop?: any, classes: string = 'z-btn') {
  comClass(ZBtn, classes, { prop, defSlot })
}
export function comBaseMount(prop?: any) {
  return comMount(ZBtn, { prop, defSlot })
}
export function comBaseAttr(Attr: ComAttrParam, prop?: any) {
  comAttr(ZBtn, Attr, { prop, defSlot })
}
export function comBaseStyle(prop?: any, style: string = 'z-btn') {
  comStyle(ZBtn, style, { prop, defSlot })
}
export function comBaseSonStyle(prop?: any, style: string = 'z-btn') {
  comSonStyle(ZBtn, style, '.z-btn', { prop, defSlot })
}
export function comBaseSonClass(prop?: any, classes: string = 'z-btn-group') {
  comSonClass(ZBtn, '.z-btn', classes, { prop, defSlot })
}