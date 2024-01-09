import { ExtractPropTypes } from "vue";
import { propsBuildS, propsFlexMixins } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseNum, PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsInputName } from "@ui/props";
export const formProps = propsBuildS({
  modelValue: PropsBaseObject,
  value: PropsBaseObject,
  disabled: PropsBaseBoolean,
  size: PropsBaseSize,
  readonly: PropsBaseBoolean,
  tabIndex: PropsBasePositiveInteger,
  validateFun: PropsBaseObject, // 自定义校验规则
  def: PropsBaseObject, // form表单默认值
  name: PropsInputName, // 作为form表单子元素时使用
  labelSize: PropsBaseNum,
  ...propsFlexMixins
})
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits