import { useSizeProp } from "@ui/hooks";
import { ExtractPropTypes, PropType } from "vue";

export const btnProps = {
  size: useSizeProp,
  /**
   * @description disable the button
   */
  disabled: Boolean as PropType<boolean>
}
export const btnEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = ExtractPropTypes<typeof btnEmits>
