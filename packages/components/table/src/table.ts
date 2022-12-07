import { ExtractPropTypes, PropType } from "vue";
export const tableProps = {
  disabled: Boolean as PropType<boolean>
}
export const tableEmits = {
}
export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableEmits = typeof tableEmits