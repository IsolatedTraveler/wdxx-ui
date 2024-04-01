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
  com: {
    type: Object,
    required: true
  }
}
export const jdslEmits = {
  // []: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof jdslProps>
export type BtnEmits = typeof jdslEmits