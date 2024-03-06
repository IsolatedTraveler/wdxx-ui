import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { ScrollEmits, ScrollProps } from "./scroll"
export const useScroll = (props: ScrollProps, emit: SetupContext<ScrollEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'scroll'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}