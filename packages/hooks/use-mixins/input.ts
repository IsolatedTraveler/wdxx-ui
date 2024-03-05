import { PropsBaseString, PropsBaseStringN, PropsInputName } from "@ui/props";
import { propsReadonlyMixins, useReadonlyMixins } from './readonly'
import { propsFlexMixins, useFlexMixins } from './flex'
import { useCssName } from "../use-css";
import { Ref } from "vue";
import { ObjStr } from "@ui/vars";
export const propsFormItemMixins = {
  name: PropsInputName,
  ...propsReadonlyMixins,
  ...propsFlexMixins
}
export const propsInputMixins = {
  placeholder: PropsBaseString,
  value: PropsBaseStringN,
  modelValue: PropsBaseStringN,
  def: PropsBaseStringN,
  ...propsFormItemMixins
}
export const useInputMixins = function (
  props: any,
  classVal: any,
  styleVal: any,
  _ref: Ref<any>,
  judgeObjClassName: ObjStr = { flex: '' }) {
  // 样式处理
  classVal[useCssName('input-box')] = true
  useReadonlyMixins(props, classVal)
  useFlexMixins(props, classVal, styleVal, _ref, judgeObjClassName)
}