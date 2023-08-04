import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import {  } from "@ui/props";
export const treeProps = propsBuildS({
})
export const treeEmits = {
}
export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreeEmits = typeof treeEmits