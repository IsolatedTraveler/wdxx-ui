import { ExtractPropTypes } from "vue";
import { PropsBaseBoolean, PropsBaseNum, PropsBaseObject, PropsBaseStringN } from "@ui/props";
import { propsBuildS, propsFormItemMixins } from "@ui/hooks";
export const formItemProps = propsBuildS({
  modelValue: PropsBaseObject,
  value: PropsBaseObject,
  labelSize: PropsBaseNum,
  label: PropsBaseStringN,
  isArr: PropsBaseBoolean,
  ...propsFormItemMixins
}, { flex: 'row' })
export const formItemEmits = {
}
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export type FormItemEmits = typeof formItemEmits