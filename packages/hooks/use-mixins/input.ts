import { PropsBaseString, PropsBaseStringN, PropsInputName } from "@ui/props";
import { propsReadonlyMixins, useReadonlyMixins } from './readonly'
import { propsFlexMixins, useFlexMixins } from './flex'
import { useCssName } from "../use-css";
import { Ref } from "vue";
import { ObjStr } from "@ui/vars";
export const propsInputMixins = {
  name: PropsInputName,
  modelValue: PropsBaseStringN,
  value: PropsBaseStringN,
  placeholder: PropsBaseString,
  ...propsReadonlyMixins,
  ...propsFlexMixins
}
export const useInputMixins = function (props: any, classVal: any, styleVal: any, _ref: Ref<any>, judgeObjClassName: ObjStr = { flex: '' }) {
  classVal[useCssName('input-box')] = true
  useReadonlyMixins(props, classVal)
  useFlexMixins(props, classVal, styleVal, _ref, judgeObjClassName, 'input')
}