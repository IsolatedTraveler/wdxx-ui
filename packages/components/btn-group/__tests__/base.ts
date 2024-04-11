import { comClass, comMount, comAttr, ComAttrParam, comStyle } from "../../../__test__/com"
import { ZBtn, ZBtnGroup } from "../../btn"

export const defSlot = '按钮'
export function comBaseClass(prop?: any, classes: string = 'z-btn') {
  comClass(ZBtnGroup, classes, { prop, defSlot })
}
export function comBaseMount(prop?: any) {
  return comMount(ZBtnGroup, { prop, defSlot })
}
export function comBaseAttr(Attr: ComAttrParam, prop?: any) {
  comAttr(ZBtnGroup, Attr, { prop, defSlot })
}
export function comBaseStyle(prop?: any, style: string = 'z-btn') {
  comStyle(ZBtnGroup, style, { prop, defSlot })
}