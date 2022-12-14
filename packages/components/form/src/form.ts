import { ExtractPropTypes, PropType } from "vue";
export const formProps = {
  disabled: Boolean as PropType<boolean>
}
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits