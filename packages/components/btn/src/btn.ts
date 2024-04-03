import { propsBuildS, propsFlexMixins, propsRadiusMixins, propsStateMixins } from "@ui/hooks";
import { PropsBtnType, PropsBaseBoolean, PropsBaseString, PropsBtnShape, PropsBaseSize } from "@ui/props";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const btnProps = propsBuildS({
  disabled: PropsBaseBoolean,
  icon: PropsBaseString,
  full: PropsBaseBoolean,
  type: PropsBtnType,
  shape: PropsBtnShape,
  size: PropsBaseSize,
  ...propsStateMixins,
  ...propsRadiusMixins,
  ...propsFlexMixins
} as const)
export const btnEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
