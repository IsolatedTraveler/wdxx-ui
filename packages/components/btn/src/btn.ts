import { propsBuildS } from "@ui/hooks";
import { PropsBtnType, PropsBaseDisabled, PropsBaseString, PropsFlex, PropsFlexRow, PropsFlexCol, PropsBasePositiveInteger, PropsBaseRadius, PropsFlexSelf, PropsBtnShape, PropsBaseSize, PropsBaseState } from "@ui/props";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const btnProps = propsBuildS({
  disabled: PropsBaseDisabled,
  type: PropsBtnType,
  icon: PropsBaseString,
  flex: PropsFlex,
  row: PropsFlexRow,
  col: PropsFlexCol,
  order: PropsBasePositiveInteger,
  radius: PropsBaseRadius,
  self: PropsFlexSelf,
  shape: PropsBtnShape,
  size: PropsBaseSize,
  state: PropsBaseState
})
export const btnEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
