import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { SelectEmits, SelectProps } from "./select"
export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'select'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}