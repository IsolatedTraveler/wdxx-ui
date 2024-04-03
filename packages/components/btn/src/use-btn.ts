import { useHtmlDisabled, useFlexMixins, useComputedRadiusMixins, useCssInit, useCoputedClass } from "@ui/hooks"
import { useInjectBtn } from "@ui/hooks/use-inject/btn"
import { ref, SetupContext } from "vue"
import type { BtnProps, BtnEmits } from "./btn"
import { EventClick } from "@ui/vars"
export const useBtn = (props: BtnProps, emit: SetupContext<BtnEmits>['emit']) => {
  const { size, radius, submit, reset } = useInjectBtn(props)
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
    , { _class, _style, classVal, styleVal } = useCssInit(props, 'btn', { cssClass: ['state', 'shape', 'full'] })
  useComputedRadiusMixins(radius, _class.value, _style.value, _ref)
  useCoputedClass(size, 'size', classVal)
  useFlexMixins(props, classVal, styleVal, _ref)
  return {
    _ref,
    _handleClick,
    _disabled,
    _class,
    _style
  }
}