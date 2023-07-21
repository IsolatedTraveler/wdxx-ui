import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseStringN } from "@ui/props";
export const formItemProps = propsBuildS({
  label:PropsBaseStringN
})
export const formItemEmits = {
}
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export type FormItemEmits = typeof formItemEmits