import { PropsBaseString, PropsBaseStringN, PropsInputName } from "@ui/props";
import { propsReadonlyMixins, useReadonlyMixins } from './readonly'
import { propsFlexMixins, useFlexMixins } from './flex'
import { useCssName } from "../use-css";
import { Ref, SetupContext } from "vue";
import { ObjStr } from "@ui/vars";
import { InputEmits } from "@ui/components";
import { useInjectInput } from "../use-inject";
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
  emit: SetupContext<InputEmits>['emit'],
  judgeObjClassName: ObjStr = { flex: '' }) {
  // 样式处理
  classVal[useCssName('input-box')] = true
  useReadonlyMixins(props, classVal)
  useFlexMixins(props, classVal, styleVal, _ref, judgeObjClassName)
  // 值处理
  const { val, prop } = useInjectInput(props, emit)
  return {
    val,
    prop
  }
}