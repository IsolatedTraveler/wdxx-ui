import { ExtractPropTypes } from "vue";
import { PropsBaseBoolean, PropsBaseNum, PropsBaseSize, PropsBaseStringN } from "@ui/props";
import { propsBuildS, propsFormItemMixins } from "@ui/hooks";
import { EventUpdate } from "@ui/vars";
export const formItemProps = propsBuildS({
  size: PropsBaseSize,
  labelSize: PropsBaseNum,
  label: PropsBaseStringN,
  isArr: PropsBaseBoolean,
  ...propsFormItemMixins
}, { flex: 'row' })
export const formItemEmits = {
  [EventUpdate]: (v: any) => true
}
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export type FormItemEmits = typeof formItemEmits