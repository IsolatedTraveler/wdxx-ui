import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseString, PropsCodeType } from "@ui/props";
export const codeProps = propsBuildS({
  data: PropsBaseString,
  type: PropsCodeType
})
export const codeEmits = {
}
export type CodeProps = ExtractPropTypes<typeof codeProps>
export type CodeEmits = typeof codeEmits