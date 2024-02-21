import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { EventClick } from "@ui/vars";
import { PropsBaseArrayStringN, PropsBaseBoolean, PropsBaseNumR, PropsBaseObjectR, PropsBaseStringN, PropsTreeExpand } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObjectR,
  index: PropsBaseStringN,
  childIndex: PropsBaseNumR,
  pid: PropsBaseArrayStringN,
  isExpand: PropsBaseBoolean,
  def: PropsTreeExpand
})
export const treeItemEmits = {
  [EventClick]: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits