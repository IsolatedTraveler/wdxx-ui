import { propsBuildS, propsFlexMixins } from "@ui/hooks";
import { PropsBaseRadius, PropsBaseSize, /*PropsBtnGroupShape*/ } from "@ui/props";
import { ExtractPropTypes } from "vue";
export const btnGroupProps = propsBuildS({
  // shape: PropsBtnGroupShape,
  size: PropsBaseSize,
  radius: PropsBaseRadius,
  ...propsFlexMixins
})
export type BtnGroupProps = ExtractPropTypes<typeof btnGroupProps>