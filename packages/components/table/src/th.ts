import { ExtractPropTypes, PropType } from "vue";
export const thProps = {
  disabled: Boolean as PropType<boolean>
}
export const thEmits = {
}
export type ThProps = ExtractPropTypes<typeof thProps>
export type ThEmits = typeof thEmits