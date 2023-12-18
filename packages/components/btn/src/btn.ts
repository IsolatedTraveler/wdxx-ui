import { propsBuildS, propsFlexMixins } from "@ui/hooks";
import { PropsBtnType, PropsBaseBoolean, PropsBaseString, PropsBaseRadius, PropsBtnShape, PropsBaseSize, PropsBaseState } from "@ui/props";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const btnProps = propsBuildS({
  disabled: PropsBaseBoolean,
  icon: PropsBaseString,
  radius: PropsBaseRadius,
  full: PropsBaseBoolean,
  type: PropsBtnType,
  shape: PropsBtnShape,
  size: PropsBaseSize,
  state: PropsBaseState,
  ...propsFlexMixins
} as const)
export const btnEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
