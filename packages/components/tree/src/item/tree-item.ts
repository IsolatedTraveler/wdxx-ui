import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObjectR, PropsBaseStringNR } from "@ui/props";
export const treeItemProps = propsBuildS({
  data: PropsBaseObjectR,
  childAlias: PropsBaseStringNR,
  idAlias: PropsBaseStringNR,
  pIdAlias: PropsBaseStringNR,
  mcAlias: PropsBaseStringNR
})
export const treeItemEmits = {
}
export type TreeItemProps = ExtractPropTypes<typeof treeItemProps>
export type TreeItemEmits = typeof treeItemEmits