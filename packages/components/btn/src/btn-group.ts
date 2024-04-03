import { propsBuildS, propsRadiusMixins, propsFlexMixins } from "@ui/hooks";
import { PropsBaseSize, /*PropsBtnGroupShape*/ } from "@ui/props";
import { ExtractPropTypes } from "vue";
export const btnGroupProps = propsBuildS({
  // shape: PropsBtnGroupShape,
  size: PropsBaseSize,
  ...propsRadiusMixins,
  ...propsFlexMixins
})
export type BtnGroupProps = ExtractPropTypes<typeof btnGroupProps>