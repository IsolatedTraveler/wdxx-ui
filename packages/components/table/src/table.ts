import { useSizeProp, useTableShapeProp } from "@ui/hooks";
import { ExtractPropTypes, PropType } from "vue";
export const tableProps = {
  shape: useTableShapeProp,
  size: useSizeProp,
  border: Boolean as PropType<boolean>,
  fit: Boolean as PropType<boolean>,
  callback: Function as PropType<Function>,
  rowKey: String as PropType<string>,
  data: Array as PropType<Array<any>>,
  page: [Boolean, Object] as PropType<boolean | object>
}
export const tableEmits = {
}
export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableEmits = typeof tableEmits