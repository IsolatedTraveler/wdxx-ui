import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsFlexAlign, PropsFlexJustify, PropsFlexSelf } from "@ui/props";
export const flexProps = propsBuildS({
  col: PropsBaseBoolean,
  justify: PropsFlexJustify,
  align: PropsFlexAlign,
  self: PropsFlexSelf,
  wrap: PropsBaseBoolean
})
export const flexEmits = {
}
export type FlexProps = ExtractPropTypes<typeof flexProps>
export type FlexEmits = typeof flexEmits