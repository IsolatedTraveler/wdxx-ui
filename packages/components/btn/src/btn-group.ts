import { useBtnGroupShapeProp, useSizeProp } from "@ui/hooks";
import { ExtractPropTypes } from "vue";
export const btnGroupProps = {
  shape: useBtnGroupShapeProp,
  size: useSizeProp
}
export type BtnGroupProps = ExtractPropTypes<typeof btnGroupProps>