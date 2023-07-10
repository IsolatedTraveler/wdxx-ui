import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch } from "vue"
import { FlexEmits, FlexProps } from "./flex"
export const useFlex = (props: FlexProps, emit: SetupContext<FlexEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    flex: props.col ? 'col' : 'row',
    justify: props.justify,
    align: props.align,
    self: props.self,
    wrap: props.wrap,
    auto: props.span ? undefined : props.auto,
    left: props.left,
    right: props.right,
    span: props.span
  })), { _class, _style } = useCss(classVal, _ref, { justify: false, align: false, self: false, span: false, left: false, right: false, auto: false })
  return {
    _ref,
    _class,
    _style
  }
}