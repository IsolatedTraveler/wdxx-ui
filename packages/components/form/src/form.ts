import { ExtractPropTypes } from "vue";
import { propsBuildS, propsFormItemMixins } from "@ui/hooks";
import { PropsBaseNum, PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize } from "@ui/props";
export const formProps = propsBuildS({
  modelValue: PropsBaseObject,
  value: PropsBaseObject,
  size: PropsBaseSize,
  tabIndex: PropsBasePositiveInteger,
  validateFun: PropsBaseObject, // 自定义校验规则
  def: PropsBaseObject, // form表单默认值
  labelSize: PropsBaseNum,
  ...propsFormItemMixins
})
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits