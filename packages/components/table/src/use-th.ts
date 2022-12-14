import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { ThEmits, ThProps } from "./th"
export const useTh = (props: ThProps, emit: SetupContext<ThEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'th'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}