import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObject } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObject
})
export const treeItemEmits = {
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits