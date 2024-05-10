import { ExtractPropTypes } from "vue"

export const showDmProps = {
  code: {
    type: String
  }
}
export const showDmEmits = {
  // []: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type ShowDmProps = ExtractPropTypes<typeof showDmProps>
export type ShowDmEmits = typeof showDmEmits