import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { InputEmits, InputProps } from "./input"
export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'input'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}