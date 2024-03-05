import { ExtractPropTypes } from "vue";
import { propsBuildS,propsInputMixins } from "@ui/hooks";
import {  PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsInputShape, PropsInputType, PropsInputValidateEvent } from "@ui/props";
export const selectProps = propsBuildS({
  unit: PropsBasePositiveInteger,
  type: PropsInputType,
  size: PropsBaseSize,
  tabIndex: PropsBasePositiveInteger,
  verify: PropsBaseString,
  validateEvent: PropsInputValidateEvent,
  validateFun: PropsBaseObject,
  shape: PropsInputShape,
  ...propsInputMixins
}, { auto: 1, flex: 'row' })
export const selectEmits = {
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits