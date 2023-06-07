import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TrEmits, TrProps } from "./tr"
export const useTr = (props: TrProps, emit: SetupContext<TrEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tr'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}