import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject } from "@ui/props";
export const formItemsProps = propsBuildS({
  disabled:PropsBaseBoolean,
  readonly:PropsBaseBoolean,
  validateFun:PropsBaseObject
})
export const formItemsEmits = {
}
export type FormItemsProps = ExtractPropTypes<typeof formItemsProps>
export type FormItemsEmits = typeof formItemsEmits