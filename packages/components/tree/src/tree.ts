import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { EventUpdate, EventCheck, EventExpand, EventSelect, ObjAny, EventSetVal } from "@ui/vars";
import { PropsBaseArray_Object, PropsBaseObject, PropsBaseStringN, PropsBaseBoolean, PropsTreeVal } from "@ui/props";
export const treeProps = propsBuildS({
  data: PropsBaseArray_Object,
  alias: PropsBaseObject,
  cols: PropsBaseArray_Object,
  value: PropsTreeVal,
  modelValue: PropsTreeVal,
  multi: PropsBaseBoolean,
  root: PropsBaseStringN
})
export const treeEmits = {
  [EventSelect]: (data: ObjAny) => true,
  [EventExpand]: (data: ObjAny) => true,
  [EventCheck]: (data: ObjAny) => true,
  [EventUpdate]: (data: any) => true,
  [EventSetVal]: (data: any) => true
}
export type TreeProps = ExtractPropTypes<typeof treeProps>
export type TreeEmits = typeof treeEmits