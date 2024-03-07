import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean } from "@ui/props";
export const popProps = propsBuildS({
  show: PropsBaseBoolean
})
export const popEmits = {
}
export type PopProps = ExtractPropTypes<typeof popProps>
export type PopEmits = typeof popEmits