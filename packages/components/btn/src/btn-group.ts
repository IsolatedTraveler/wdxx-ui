import { propsBuildS, propsFlexMixins } from "@ui/hooks";
import { PropsBaseGroupRadius, PropsBaseSize, /*PropsBtnGroupShape*/ } from "@ui/props";
import { ExtractPropTypes } from "vue";
export const btnGroupProps = propsBuildS({
  // shape: PropsBtnGroupShape,
  size: PropsBaseSize,
  radius: PropsBaseGroupRadius,
  ...propsFlexMixins
})
export type BtnGroupProps = ExtractPropTypes<typeof btnGroupProps>