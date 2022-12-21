import { ThObj } from "@ui/vars";
import { ExtractPropTypes, PropType, Ref } from "vue";
export const theadProps = {
  cols: Array as PropType<Array<Array<Ref<ThObj>>>>,
  rowKey: String as PropType<string>,
  checked: Boolean as PropType<boolean>,
  check: Function as PropType<(judge: boolean) => void>,
  reload: Boolean as PropType<boolean>
}
export const theadEmits = {
}
export type TheadProps = ExtractPropTypes<typeof theadProps>
export type TheadEmits = typeof theadEmits