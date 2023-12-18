import { ref, SetupContext } from "vue"
import { FlexEmits, FlexProps } from "./flex"
import { useFlexMixins } from "@ui/hooks"
export const useFlex = (props: FlexProps, emit: SetupContext<FlexEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), _class = ref<any>({}), _style = ref<any>({})
  useFlexMixins(props, _class.value, _style.value)
  return {
    _ref,
    _class,
    _style
  }
}