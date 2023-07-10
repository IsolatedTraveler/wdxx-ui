import { propsBuildS } from "@ui/hooks";
import { PropsBtnType, PropsBaseBoolean, PropsBaseString, PropsFlex, PropsFlexJustify, PropsFlexAlign, PropsBasePositiveInteger, PropsBaseRadius, PropsFlexSelf, PropsBtnShape, PropsBaseSize, PropsBaseState } from "@ui/props";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const btnProps = propsBuildS({
  disabled: PropsBaseBoolean,
  icon: PropsBaseString,
  order: PropsBasePositiveInteger,
  radius: PropsBaseRadius,
  full: PropsBaseBoolean,
  type: PropsBtnType,
  flex: PropsFlex,
  junstify: PropsFlexJustify,
  align: PropsFlexAlign,
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
