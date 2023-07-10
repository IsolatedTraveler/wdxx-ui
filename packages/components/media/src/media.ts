import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseObject } from "@ui/props";
export const mediaProps = propsBuildS({
  video: PropsBaseObject
})
export const mediaEmits = {
}
export type MediaProps = ExtractPropTypes<typeof mediaProps>
export type MediaEmits = typeof mediaEmits