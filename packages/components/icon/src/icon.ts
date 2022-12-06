import { ExtractPropTypes, PropType } from "vue";
export const iconProps = {
  disabled: Boolean as PropType<boolean>
}
export const iconEmits = {
}
export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconEmits = typeof iconEmits