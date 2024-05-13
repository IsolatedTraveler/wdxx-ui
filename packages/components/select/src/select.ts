import { ExtractPropTypes } from "vue";
import { propsBuildS, propsInputMixins } from "@ui/hooks";
import { PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize, PropsBaseString, PropsInputShape, PropsInputValidateEvent, PropsBaseArray_Object, PropsBaseStrBoolean } from "@ui/props";
import { EventSelect, EventSelectData, EventUpdate } from "@ui/vars";
export const selectProps = propsBuildS({
  unit: PropsBasePositiveInteger,
  size: PropsBaseSize,
  tabIndex: PropsBasePositiveInteger,
  verify: PropsBaseString,
  validateEvent: PropsInputValidateEvent,
  validateFun: PropsBaseObject,
  multi: PropsBaseStrBoolean,
  shape: PropsInputShape,
  data: PropsBaseArray_Object,
  showId: PropsBaseString,
  valId: PropsBaseString,
  ...propsInputMixins
}, { auto: 1, flex: 'row', showId: 'mc', valId: 'id' })
export const selectEmits = {
  [EventUpdate]: (val: any) => true,
  [EventSelect]: (val: EventSelectData) => true
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits