import { useBtnTypeProp, useSizeProp, useFlexProp, useStateProp, useAlginProp, useRadiusProp, useSelfProp, useBtnShapeProp } from "@ui/hooks";
import { EventClick } from "@ui/vars";
import { ExtractPropTypes, PropType } from "vue";

export const btnProps = {
  disabled: Boolean as PropType<boolean>,
  flex: useFlexProp,
  icon: String as PropType<string>,
  rowAlign: useAlginProp,
  radius: useRadiusProp,
  self: useSelfProp,
  shape: useBtnShapeProp,
  size: useSizeProp,
  state: useStateProp,
  type: useBtnTypeProp
}
export const btnEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
