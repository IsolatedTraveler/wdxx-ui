import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FlexChildEmits, FlexChildProps } from "./flex-child"
export const useFlexChild = (props: FlexChildProps, emit: SetupContext<FlexChildEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'flex-child'
  })), { _class } = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}