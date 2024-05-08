import { propsBuildS } from "@ui/hooks";
import { PropsBaseString, PropsBaseArray_Object, PropsBaseAny } from "@ui/props";
import { ExtractPropTypes } from "vue";

export const loadProps = propsBuildS({
  data: PropsBaseArray_Object,
  com: PropsBaseAny,
  ly: PropsBaseString,
  def: PropsBaseString
})
export const loadEmits = {
}
export type LoadProps = ExtractPropTypes<typeof loadProps>
export type LoadEmits = typeof loadEmits
