import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsFlex, PropsFlexRow, PropsFlexCol, PropsFlexSelf } from "@ui/props";
export const flexProps = propsBuildS({
  flex: PropsFlex,
  row: PropsFlexRow,
  col: PropsFlexCol,
  self: PropsFlexSelf
})
export const flexEmits = {
}
export type FlexProps = ExtractPropTypes<typeof flexProps>
export type FlexEmits = typeof flexEmits