import { ref, SetupContext } from "vue"
import { SelectEmits, SelectProps } from "./select"
export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}