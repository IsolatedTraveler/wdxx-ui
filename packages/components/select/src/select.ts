import { ExtractPropTypes } from "vue";
import { propsBuildS, propsInputMixins } from "@ui/hooks";
import { PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsInputShape, PropsBaseBoolean, PropsInputValidateEvent, PropsBaseArray_Object } from "@ui/props";
export const selectProps = propsBuildS({
  unit: PropsBasePositiveInteger,
  size: PropsBaseSize,
  tabIndex: PropsBasePositiveInteger,
  verify: PropsBaseString,
  validateEvent: PropsInputValidateEvent,
  validateFun: PropsBaseObject,
  multi: PropsBaseBoolean,
  shape: PropsInputShape,
  data: PropsBaseArray_Object,
  showId: PropsBaseString,
  valId: PropsBaseString,
  ...propsInputMixins
}, { auto: 1, flex: 'row', showId: 'mc', valId: 'id' })
export const selectEmits = {
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits