import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FlexAutoEmits, FlexAutoProps } from "./flex-auto"
export const useFlexAuto = (props: FlexAutoProps, emit: SetupContext<FlexAutoEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'flex-auto'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}