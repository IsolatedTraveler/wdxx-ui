import { propsBuildS } from "@ui/hooks"
import { PropsBaseString } from "@ui/props"
import { ExtractPropTypes } from "vue"
export const props = propsBuildS({
  id: PropsBaseString,
  bbh: PropsBaseString
})
export type Props = ExtractPropTypes<typeof props>
