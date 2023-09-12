import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObjectR } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObjectR
})
export const treeItemEmits = {
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits