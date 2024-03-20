import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseStringN } from "@ui/props";
export const popProps = propsBuildS({
  show: PropsBaseBoolean,
  zIndex: PropsBaseStringN
}, { zIndex: 999 })
export const popEmits = {
}
export type PopProps = ExtractPropTypes<typeof popProps>
export type PopEmits = typeof popEmits