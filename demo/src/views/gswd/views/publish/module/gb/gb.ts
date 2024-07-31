import { propsBuildS } from "@ui/hooks"
import { PropsBaseString } from "@ui/props"
import { ExtractPropTypes } from "vue"
export const gbProps = propsBuildS({
  id: PropsBaseString,
  bbh: PropsBaseString,
  ms: PropsBaseString
})
export type GbProps = ExtractPropTypes<typeof gbProps>
