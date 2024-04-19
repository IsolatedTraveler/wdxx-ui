import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseAny, PropsBaseBoolean, PropsUploadType } from "@ui/props";
import { EventUpdate, EventUpdateObj } from "@ui/vars";
export const uploadProps = propsBuildS({
  type: PropsUploadType,
  multi: PropsBaseBoolean,
  value: PropsBaseAny,
  modelValue: PropsBaseAny,
  obj: PropsBaseAny
})
export const uploadEmits = {
  [EventUpdate]: (_v: any) => true,
  [EventUpdateObj]: (_v: any) => true
}
export type UploadProps = ExtractPropTypes<typeof uploadProps>
export type UploadEmits = typeof uploadEmits