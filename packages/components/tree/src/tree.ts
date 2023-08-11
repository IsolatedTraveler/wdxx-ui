import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseArray_Object, PropsBaseObject, } from "@ui/props";
export const treeProps = propsBuildS({
  data: PropsBaseArray_Object,
  alias: PropsBaseObject
})
export const treeEmits = {
}
export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreeEmits = typeof treeEmits