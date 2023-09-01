import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseString } from "@ui/props";
export const iconProps = propsBuildS({
  name: PropsBaseString
})
export const iconEmits = {
}
export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconEmits = typeof iconEmits