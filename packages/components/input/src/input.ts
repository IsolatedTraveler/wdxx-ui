import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsBaseStringN, PropsFlexBase, PropsInputName, PropsInputShape, PropsInputType, PropsInputValidateEvent } from "@ui/props";
import { EventUpdate } from "@ui/vars";
export const inputProps = propsBuildS({
  auto: PropsBasePositiveInteger,
  span: PropsFlexBase,
  unit: PropsBasePositiveInteger,
  modelValue: PropsBaseStringN,
  value: PropsBaseStringN,
  placeholder: PropsBaseString,
  clear: PropsBaseBoolean,
  disabled: PropsBaseBoolean,
  type: PropsInputType,
  size: PropsBaseSize,
  readonly: PropsBaseBoolean,
  tabIndex: PropsBasePositiveInteger,
  verify: PropsBaseString,
  validateEvent: PropsInputValidateEvent,
  validateFun: PropsBaseObject,
  shape: PropsInputShape,
  name: PropsInputName
}, { auto: 1 })
export const inputEmits = {
  [EventUpdate]: (val: any) => true
}
export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits