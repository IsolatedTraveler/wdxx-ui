import { useSizeProp } from "@ui/hooks";
import { ExtractPropTypes } from "vue";

export const btnProps = {
  size: useSizeProp,
  disabled: Boolean
}
export const btnEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof btnProps>
export type BtnEmits = ExtractPropTypes<typeof btnEmits>
