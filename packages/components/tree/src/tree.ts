import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { EventUpdate, EventCheck, EventExpand, EventSelect, ObjAny, EventSelectData } from "@ui/vars";
import { PropsBaseArray_Object, PropsBaseObject, PropsBaseStringN, PropsTreeVal, PropsBaseStrBoolean } from "@ui/props";
export const treeProps = propsBuildS({
  data: PropsBaseArray_Object,
  alias: PropsBaseObject,
  cols: PropsBaseArray_Object,
  value: PropsTreeVal,
  modelValue: PropsTreeVal,
  multi: PropsBaseStrBoolean,
  root: PropsBaseStringN
})
export const treeEmits = {
  [EventSelect]: (data: EventSelectData) => true,
  [EventExpand]: (data: ObjAny) => true,
  [EventCheck]: (data: ObjAny) => true,
  [EventUpdate]: (data: any) => true
}
export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreeEmits = typeof treeEmits