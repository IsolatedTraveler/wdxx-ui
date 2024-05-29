import { propsBuildS } from "@ui/hooks"
import { PropsBaseString } from "@ui/props"
import { ExtractPropTypes } from "vue"
export const publishProps = propsBuildS({
  id: PropsBaseString,
  bbh: PropsBaseString
})
export type PublishProps = ExtractPropTypes<typeof publishProps>
