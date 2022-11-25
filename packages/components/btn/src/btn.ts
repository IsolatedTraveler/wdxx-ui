import { useBtnTypeProp, useSizeProp, useFlexProp, useStateProp, useAlginProp, useRadiusProp, useSelfProp, useBtnShapeProp } from "@ui/hooks";
import { ExtractPropTypes, PropType } from "vue";

export const btnProps = {
  disabled: Boolean as PropType<boolean>,
  flex: useFlexProp,
  icon: String as PropType<string>,
  loading: Boolean as PropType<boolean>,
  rowAlign: useAlginProp,
  radius: useRadiusProp,
  self: useSelfProp,
  shape: useBtnShapeProp,
  size: useSizeProp,
  state: useStateProp,
  type: useBtnTypeProp
}
export const btnEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = typeof btnEmits
