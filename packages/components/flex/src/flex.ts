import { ExtractPropTypes } from "vue";
import { propsBuildS, propsFlexMixins } from "@ui/hooks";
export const flexProps = propsBuildS(propsFlexMixins, { flex: 'row', auto: '1', basis: '0' })
export const flexEmits = {
}
export type FlexProps = ExtractPropTypes<typeof flexProps>
export type FlexEmits = typeof flexEmits