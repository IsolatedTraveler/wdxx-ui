import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { IconEmits, IconProps } from "./icon"
export const useIcon = (props: IconProps, emit: SetupContext<IconEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'icon'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}