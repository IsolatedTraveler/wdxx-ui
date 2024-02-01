import { ExtractPropTypes } from "vue";
import { propsBuildS, propsInputMixins } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsInputShape, PropsInputType, PropsInputValidateEvent } from "@ui/props";
import { EventUpdate } from "@ui/vars";
export const inputProps = propsBuildS({
  unit: PropsBasePositiveInteger,
  clear: PropsBaseBoolean,
  type: PropsInputType,
  size: PropsBaseSize,
  tabIndex: PropsBasePositiveInteger,
  verify: PropsBaseString,
  validateEvent: PropsInputValidateEvent,
  validateFun: PropsBaseObject,
  shape: PropsInputShape,
  ...propsInputMixins
}, { auto: 1, flex: 'row' })
export const inputEmits = {
  [EventUpdate]: (val: any) => true
}
export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits