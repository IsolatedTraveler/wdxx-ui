import { ExtractPropTypes } from "vue"

export const jdslProps = {
  title: {
    type: String,
    default: ''
  },
  sm: {
    type: String,
    default: ''
  },
  code: {
    type: String
  }
}
export const jdslEmits = {
  // []: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type JdslProps = ExtractPropTypes<typeof jdslProps>
export type JdslEmits = typeof jdslEmits