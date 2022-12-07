import { ref, SetupContext } from "vue"
import { ThEmits, ThProps } from "./th"
export const useTh = (props: ThProps, emit: SetupContext<ThEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}