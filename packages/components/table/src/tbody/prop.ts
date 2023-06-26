import { ObjAny, TdObj } from "@ui/vars";
import { ExtractPropTypes, PropType, Ref } from "vue";
export const tbodyProps = {
  cols: Array as PropType<Array<Ref<TdObj>>>,
  data: Array as PropType<Array<any>>,
  rowKey: String as PropType<string>,
  callback: Function as PropType<Function>,
  checkData: Object as PropType<ObjAny>,
  check: Function as PropType<(judge: any, id: string) => void>,
  reload: Boolean as PropType<boolean>
}
export const tbodyEmits = {
}
export type TbodyProps = ExtractPropTypes<typeof tbodyProps>
export type TbodyEmits = typeof tbodyEmits