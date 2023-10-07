import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBasePositiveInteger, PropsFlexAlign, PropsFlexBase, PropsFlexJustify, PropsFlexSelf } from "@ui/props";
export const flexProps = propsBuildS({
  col: PropsBaseBoolean,
  justify: PropsFlexJustify,
  align: PropsFlexAlign,
  self: PropsFlexSelf,
  wrap: PropsBaseBoolean,
  auto: PropsBasePositiveInteger,
  span: PropsFlexBase,
  left: PropsBasePositiveInteger,
  right: PropsBasePositiveInteger,
  order: PropsBasePositiveInteger
})
export const flexEmits = {
}
export type FlexProps = ExtractPropTypes<typeof flexProps>
export type FlexEmits = typeof flexEmits