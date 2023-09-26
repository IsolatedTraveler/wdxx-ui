import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { EventSelect, ObjAny } from "@ui/vars";
import { PropsBaseArray_Object, PropsBaseObject } from "@ui/props";
export const treeProps = propsBuildS({
  data: PropsBaseArray_Object,
  alias: PropsBaseObject,
  cols: PropsBaseArray_Object
})
export const treeEmits = {
  [EventSelect]: (data: ObjAny) => true
}
export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreeEmits = typeof treeEmits