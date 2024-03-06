import { ExtractPropTypes } from "vue";
import { propsBuildS, propsInputMixins } from "@ui/hooks";
import { PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsInputShape, PropsBaseBoolean, PropsInputValidateEvent } from "@ui/props";
export const selectProps = propsBuildS({
  unit: PropsBasePositiveInteger,
  size: PropsBaseSize,
  tabIndex: PropsBasePositiveInteger,
  verify: PropsBaseString,
  validateEvent: PropsInputValidateEvent,
  validateFun: PropsBaseObject,
  multi: PropsBaseBoolean,
  shape: PropsInputShape,
  ...propsInputMixins
}, { auto: 1, flex: 'row' })
export const selectEmits = {
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits