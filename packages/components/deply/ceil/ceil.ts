import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseNum, PropsBaseObjectR } from "@ui/props";
export const ceilProps = propsBuildS({
  data: PropsBaseObjectR,
  col: PropsBaseObjectR,
  index: PropsBaseNum
})
export type CeilProps = ExtractPropTypes<typeof ceilProps>
