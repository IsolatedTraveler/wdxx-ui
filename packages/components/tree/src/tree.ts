import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { EventCheck, EventExpand, EventSelect, ObjAny } from "@ui/vars";
import { PropsBaseArray_Object, PropsBaseObject, PropsBaseStringN, PropsTreeExpand } from "@ui/props";
export const treeProps = propsBuildS({
  data: PropsBaseArray_Object,
  alias: PropsBaseObject,
  cols: PropsBaseArray_Object,
  expand: PropsTreeExpand,
  pId: PropsBaseStringN
})
export const treeEmits = {
  [EventSelect]: (data: ObjAny) => true,
  [EventExpand]: (data: ObjAny) => true,
  [EventCheck]: (data: ObjAny) => true
}
export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreeEmits = typeof treeEmits