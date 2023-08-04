import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import {  } from "@ui/props";
export const treeItemProps = propsBuildS({
})
export const treeItemEmits = {
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits