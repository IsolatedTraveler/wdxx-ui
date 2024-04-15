import { propsBuildS } from "@ui/hooks";
import { PropsBaseAny } from "@ui/props";
import { EventUpdate } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const colTableProps = propsBuildS({
  modelValue: PropsBaseAny
})
export const colTableEmits = {
  [EventUpdate]: (_v: any) => true
}
export type ColTableProps = ExtractPropTypes<typeof colTableProps>
export type ColTableEmits = typeof colTableEmits
