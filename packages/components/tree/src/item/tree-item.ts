import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseArrayStringN, PropsBaseBoolean, PropsBaseNumR, PropsBaseObjectR, PropsBaseStringN } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObjectR,
  index: PropsBaseStringN,
  childIndex: PropsBaseNumR,
  pid: PropsBaseArrayStringN,
  isExpand: PropsBaseBoolean
})
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>