import { propsBuildS } from "@ui/hooks";
import { PropsBaseString, PropsBaseArray_Object, PropsBaseAny } from "@ui/props";
import { EventUpdate } from "@ui/vars";
import { ExtractPropTypes } from "vue";

export const loadProps = propsBuildS({
  data: PropsBaseArray_Object,
  com: PropsBaseAny,
  modelValue: PropsBaseString
} as const)
export const loadEmits = {
  [EventUpdate]: (_v: any) => true
}
export type LoadProps = ExtractPropTypes<typeof loadProps>
export type LoadEmits = typeof loadEmits
