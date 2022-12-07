import { ref, SetupContext } from "vue"
import { TableEmits, TableProps } from "./table"
export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}