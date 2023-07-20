import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject, PropsBasePositiveInteger, PropsBaseSize } from "@ui/props";
export const formProps = propsBuildS({
  modelValue:PropsBaseObject,
  value:PropsBaseObject,
  disabled:PropsBaseBoolean,
  size:PropsBaseSize,
  readonly:PropsBaseBoolean,
  tabIndex:PropsBasePositiveInteger,
  validateFun:PropsBaseObject
})
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits