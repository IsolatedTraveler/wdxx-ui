import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsBaseStringN, PropsInputShape, PropsInputType, PropsInputValidateEvent } from "@ui/props";
export const inputProps = propsBuildS({
  modelValue:PropsBaseStringN,
  value:PropsBaseStringN,
  placeholder:PropsBaseString,
  clear:PropsBaseBoolean,
  disabled:PropsBaseBoolean,
  type:PropsInputType,
  size:PropsBaseSize,
  readonly:PropsBaseBoolean,
  label:PropsBaseStringN,
  tabIndex:PropsBasePositiveInteger,
  verify:PropsBaseString,
  validateEvent:PropsInputValidateEvent,
  validateFun:PropsBaseObject,
  shape: PropsInputShape
})
export const inputEmits = {
}
export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits