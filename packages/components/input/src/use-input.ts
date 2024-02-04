import { useCssInit } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { InputEmits, InputProps } from "./input"
import { useInputMixins } from "@ui/hooks"
export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const _ref = ref<HTMLInputElement>(),
    { _class, _style, classVal, styleVal } = useCssInit(props, 'input', { cssClass: ['size'] }),
    { _value, prop } = useInputMixins(props, classVal, styleVal, _ref, emit, {})

  return {
    _ref,
    _class,
    _style,
    _value,
    prop
  }
}