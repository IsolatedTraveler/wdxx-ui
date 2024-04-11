import { comClass, comMount, comAttr, ComAttrParam, comStyle } from "../../../__test__/com"
import ZBtn from ".."

export const defSlot = '按钮'
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