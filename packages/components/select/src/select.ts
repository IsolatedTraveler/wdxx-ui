import { ExtractPropTypes, PropType } from "vue";
export const selectProps = {
  disabled: Boolean as PropType<boolean>
}
export const selectEmits = {
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits