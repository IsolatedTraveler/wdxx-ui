import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { PopEmits, PopProps } from "./pop"
export const usePop = (props: PopProps, emit: SetupContext<PopEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'pop'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}