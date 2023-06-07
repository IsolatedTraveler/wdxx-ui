import { useSizeProp, useStateProp, useRowAlginProp, useRadiusProp, useSelfProp, useBtnShapeProp, useColAlginProp, useOrderProp } from "@ui/hooks";
import { PropsBtnType, PropsBaseDisabled, PropsBaseString, PropsCommonFlex } from "@ui/props";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const btnProps = {
  disabled: PropsBaseDisabled,
  type: PropsBtnType,
  icon: PropsBaseString,
  flex: PropsCommonFlex,

  rowAlign: useRowAlginProp,
  colAlign: useColAlginProp,
  order: useOrderProp,
  radius: useRadiusProp,
  self: useSelfProp,
  shape: useBtnShapeProp,
  size: useSizeProp,
  state: useStateProp
}
export const btnEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
