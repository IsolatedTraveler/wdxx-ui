import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseBoolean, PropsBaseObject } from "@ui/props";
export const mediaProps = propsBuildS({
  video: PropsBaseObject,
  audio: PropsBaseObject,
  auto: Number,
  isAudio: PropsBaseBoolean
})
export const mediaEmits = {
}
export type MediaProps = ExtractPropTypes<typeof mediaProps>
export type MediaEmits = typeof mediaEmits