import { useHtmlDisabled, useCss, useFlexMixins } from "@ui/hooks"
import { useInjectBtn } from "@ui/hooks/use-inject/btn"
import { computed, ref, SetupContext } from "vue"
import type { BtnProps, BtnEmits } from "./btn"
import { EventClick } from "@ui/vars"
export const useBtn = (props: BtnProps, emit: SetupContext<BtnEmits>['emit']) => {
  const { size, submit, reset } = useInjectBtn(props)
  const handleClick = (evt: MouseEvent) => {
    if (props.type === 'submit') {
      submit()
    } else if (props.type === 'reset') {
      reset()
    } else {
      emit?.(EventClick, evt)
    }
  }
  const _ref = ref<HTMLButtonElement>(), { _disabled, _handleClick } = useHtmlDisabled(props, handleClick)
    , classProp = computed(() => {
      return {
        name: 'btn',
        state: props.state,
        size: size.value,
        shape: props.shape,
        radius: props.radius,
        full: props.full
      }
    }), { _class, _style } = useCss(classProp, _ref)
  useFlexMixins(props, _class.value, _style.value)
  return {
    _ref,
    _handleClick,
    _disabled,
    _class,
    _style
  }
}