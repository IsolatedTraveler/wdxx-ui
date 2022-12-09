import { useClickDisabled, useCss } from "@ui/hooks"
import { computed, ref, SetupContext } from "vue"
import type { BtnProps, BtnEmits } from "./btn"
// order: useOrderProp,
// radius: useRadiusProp,
export const useBtn = (props: BtnProps, emit: SetupContext<BtnEmits>['emit']) => {
  const handleClick = (evt: MouseEvent) => {
    if (props.type === 'submit') {

    } else if (props.type === 'reset') {

    } else {
      emit?.('click', evt)
    }
  }
  const _ref = ref<HTMLButtonElement>(), {_disabled, _handleClick} = useClickDisabled(props, handleClick), classProp = computed(() => {
    return {
      name: 'btn',
      flex: props.flex,
      state: props.state,
      size: props.size,
      shape: props.shape,
      radius: props.radius
    }
  }), {_class, _style} = useCss(classProp.value, _ref)
  return {
    _ref,
    _handleClick,
    _disabled,
    _class,
    _style
  }
}