import { propsBuildS } from "@ui/hooks";
import { PropsBaseSize, PropsBtnGroupShape } from "@ui/props";
import { ExtractPropTypes } from "vue";
export const btnGroupProps = propsBuildS({
  shape: PropsBtnGroupShape,
  size: PropsBaseSize
})
export type BtnGroupProps = ExtractPropTypes<typeof btnGroupProps>