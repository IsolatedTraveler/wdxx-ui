import { ref, SetupContext } from "vue"
import { IconEmits, IconProps } from "./icon"
export const useIcon = (props: IconProps, emit: SetupContext<IconEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}