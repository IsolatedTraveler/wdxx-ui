import { useSizeProp, useRadiusProp, useSelfProp, useRuleProp } from "@ui/hooks";
import { EventUpdate } from "@ui/vars";
import { isString } from "@ui/utils";
import { ExtractPropTypes, PropType } from "vue";

export const selectTableProps = {
  data: Array as PropType<Array<any>>,
  disabled: Boolean as PropType<boolean>,
  icon: String as PropType<string>,
  isCancel: Boolean as PropType<boolean>,
  isSearch: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  modelValue: [String, Boolean, Number] as PropType<string | boolean | number>,
  name: String as PropType<string>,
  placeholder: String,
  radius: useRadiusProp,
  rule: useRuleProp,
  searchFun: Function,
  self: useSelfProp,
  size: useSizeProp
}
export const selectTableEmits = {
  [EventUpdate]: (v: string) => isString(v)
}
export type SelectTableProps = ExtractPropTypes<typeof selectTableProps>
export type SelectTableEmits = typeof selectTableEmits
