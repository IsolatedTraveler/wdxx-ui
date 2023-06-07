import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TdEmits, TdProps } from "./td"
export const useTd = (props: TdProps, emit: SetupContext<TdEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'td'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}