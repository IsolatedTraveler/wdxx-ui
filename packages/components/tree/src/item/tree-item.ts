import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { EventClick } from "@ui/vars";
import { PropsBaseArrayStringN, PropsBaseNumR, PropsBaseObjectR, PropsBaseStringN } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObjectR,
  index: PropsBaseStringN,
  childIndex: PropsBaseNumR,
  pid: PropsBaseArrayStringN
})
export const treeItemEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits