import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObjectR } from "@ui/props";
export const treeColProps = propsBuildS({
  data: PropsBaseObjectR,
  col: PropsBaseObjectR
})
export type TreeColProps = ExtractPropTypes<typeof treeColProps>
