import { ExtractPropTypes } from "vue"

export const sqlProps = {
  where: {
    type: String,
    default: ''
  },
  primary: {
    type:  Array<String>,
    default() {
      return ['id']
    }
  }
}
export const sqlEmits = {
  // []: (evt: MouseEvent) => evt instanceof MouseEvent
}
export type BtnProps = ExtractPropTypes<typeof sqlProps>
export type BtnEmits = typeof sqlEmits