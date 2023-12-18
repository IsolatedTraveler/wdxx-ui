import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseArray_Object } from "@ui/props";
export const tableProps = propsBuildS({
  cols: PropsBaseArray_Object,
  data: PropsBaseArray_Object
})
export const tableEmits = {
}
export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableEmits = typeof tableEmits