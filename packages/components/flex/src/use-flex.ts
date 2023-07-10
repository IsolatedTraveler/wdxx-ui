import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FlexEmits, FlexProps } from "./flex"
export const useFlex = (props: FlexProps, emit: SetupContext<FlexEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    flex: props.col ? 'col' : 'row',
    justify: props.justify,
    align: props.align,
    self: props.self,
    wrap: props.wrap
  })), { _class } = useCss(classVal, _ref, { justify: false, align: false, self: false })
  return {
    _ref,
    _class
  }
}