import { useRadiusProp, useSizeProp } from "@ui/hooks";
import { isBoolean, isNumber, isString } from "@ui/utils";
import { EventChange, EventSearch, EventUpdate } from "@ui/vars";
import { ExtractPropTypes, PropType } from "vue";
export const selectProps = {
  radius: useRadiusProp,
  size: useSizeProp,
  data: Array,
  disabled: Boolean as PropType<boolean>,
  modelValue: [String, Boolean, Number],
  placeholder: String,
  search: Boolean,
  multi: [String, Boolean],
  date: Object,
  table: Object
}
export const selectEmits = {
  [EventUpdate]: (v: unknown) => isString(v) || isNumber(v) || isBoolean(v),
  [EventChange]: (v: unknown, obj: any) => isString(v) || isNumber(v) || isBoolean(v),
  [EventSearch]: (v: unknown) => isString(v) || isNumber(v)
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits