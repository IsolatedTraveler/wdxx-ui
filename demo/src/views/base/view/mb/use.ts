import { SetupContext, ref } from "vue"
import { SeEmits, SeProps } from "./prop"
export const seUse = (props: SeProps, emit: SetupContext<SeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  console.log(props, emit)
  return {
    _ref
  }
}