import { comClass, comMount, comAttr, ComAttrParam, comSonStyle, comStyle, comSonClass } from "../../../__test__/com"
import ZBtn from "../../btn/src/btn.vue"
import ZBtnGroup from "../../btn/src/btn-group.vue"
import { mount } from '@vue/test-utils';
import { h } from "vue";
mount(ZBtnGroup, {
  propsData: { radius: 'round' },
  slots: {
  }
})
const defBtnSlot = '按钮', defSlot = [
  h(ZBtn, { props: {} }, () => defBtnSlot),
  h(ZBtn, { props: {} }, () => defBtnSlot)
]
export function comBaseClass(prop?: any, classes: string = 'z-btn-group') {
  comClass(ZBtnGroup, classes, { prop, defSlot })
}
export function comBaseMount(prop?: any) {
  return comMount(ZBtnGroup, { prop, defSlot })
}
export function comBaseAttr(Attr: ComAttrParam, prop?: any) {
  comAttr(ZBtnGroup, Attr, { prop, defSlot })
}
export function comBaseStyle(prop?: any, style: string = 'z-btn') {
  comStyle(ZBtn, style, { prop, defSlot })
}
export function comBaseSonStyle(prop?: any, style: string = 'z-btn') {
  comSonStyle(ZBtnGroup, '.z-btn', style, { prop, defSlot })
}
export function comBaseSonClass(prop?: any, classes: string = 'z-btn-group') {
  comSonClass(ZBtnGroup, '.z-btn', classes, { prop, defSlot })
}