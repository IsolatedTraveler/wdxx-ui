import { ExtractPropTypes, PropType } from "vue";
export const formProps = {
  disabled: Boolean as PropType<boolean>,
  modelValue: Object as Record<string, any>
}
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits