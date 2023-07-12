import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject, PropsBaseString, PropsCallKitShape } from "@ui/props";
import { EventLeave } from "@ui/vars";
export const callKitProps = propsBuildS({
  single: PropsBaseBoolean,
  media: PropsBaseObject,
  shape: PropsCallKitShape,
  localId: PropsBaseString
})
export const callKitEmits = {
  [EventLeave]: (evt: string) => undefined
}
export type CallKitProps = ExtractPropTypes<typeof callKitProps>
export type CallKitEmits = typeof callKitEmits