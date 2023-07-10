import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject, PropsCallKitShape } from "@ui/props";
export const callKitProps = propsBuildS({
  single: PropsBaseBoolean,
  main: PropsBaseObject,
  meida: PropsBaseObject,
  shape: PropsCallKitShape
})
export const callKitEmits = {
}
export type CallKitProps = ExtractPropTypes<typeof callKitProps>
export type CallKitEmits = typeof callKitEmits