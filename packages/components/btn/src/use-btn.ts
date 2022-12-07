import { useClickDisabled, useCss } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import type { BtnProps, BtnEmits } from "./btn"
// order: useOrderProp,
// radius: useRadiusProp,
export const useBtn = (props: BtnProps, emit: SetupContext<BtnEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), {_disabled, _handleClick} = useClickDisabled(props, emit)
  , {_class, _style} = useCss(props, ['flex', 'state', 'size', 'shape', 'radius'], 'z-btn', _ref)
  return {
    _ref,
    _handleClick,
    _disabled,
    _class,
    _style
  }
}