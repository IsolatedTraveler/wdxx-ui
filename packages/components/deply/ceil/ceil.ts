import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObjectR } from "@ui/props";
export const ceilProps = propsBuildS({
  data: PropsBaseObjectR,
  col: PropsBaseObjectR
})
export type CeilProps = ExtractPropTypes<typeof ceilProps>
