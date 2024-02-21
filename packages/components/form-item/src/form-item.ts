import { ExtractPropTypes } from "vue";
import { propsBuildS, propsFlexMixins } from "@ui/hooks";
import { PropsBaseNum, PropsBaseStringN } from "@ui/props";
export const formItemProps = propsBuildS({
  labelSize: PropsBaseNum,
  label: PropsBaseStringN,
  ...propsFlexMixins
}, { flex: 'row' })
export const formItemEmits = {
}
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export type FormItemEmits = typeof formItemEmits