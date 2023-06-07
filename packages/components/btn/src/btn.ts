import { useSizeProp, useStateProp, useRadiusProp, useSelfProp, useBtnShapeProp } from "@ui/hooks";
import { PropsBtnType, PropsBaseDisabled, PropsBaseString, PropsCommonFlex, PropsCommonFlexRow, PropsCommonFlexCol, PropsBasePositiveInteger, propsBuildS } from "@ui/props";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const btnProps = propsBuildS({
  disabled: PropsBaseDisabled,
  type: PropsBtnType,
  icon: PropsBaseString,
  flex: PropsCommonFlex,
  row: PropsCommonFlexRow,
  col: PropsCommonFlexCol,
  order: PropsBasePositiveInteger,

  radius: useRadiusProp,
  self: useSelfProp,
  shape: useBtnShapeProp,
  size: useSizeProp,
  state: useStateProp
})
export const btnEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
