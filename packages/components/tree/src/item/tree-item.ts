import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObject, PropsBaseStringN } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObject,
  childAlias: PropsBaseStringN,
  idAlias: PropsBaseStringN,
  pIdAlias: PropsBaseStringN,
  mcAlias: PropsBaseStringN,
})
export const treeItemEmits = {
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits