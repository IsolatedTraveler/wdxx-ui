import { ref, SetupContext } from "vue"
import { SelectTableEmits, SelectTableProps } from "./select-table"
export const useSelectTable = (props: SelectTableProps, emit: SetupContext<SelectTableEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}