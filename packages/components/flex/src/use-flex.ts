import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FlexEmits, FlexProps } from "./flex"
export const useFlex = (props: FlexProps, emit: SetupContext<FlexEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'flex'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}