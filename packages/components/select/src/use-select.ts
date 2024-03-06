import { useCssInit, useInjectInput, useInputMixins } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { SelectEmits, SelectProps } from "./select"
export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(),
    { _class, _style, classVal, styleVal } = useCssInit(props, 'select', { cssClass: ['size'], classAdd: ['multi'] }),
    { val, prop } = useInjectInput(props, emit)
  useInputMixins(props, classVal, styleVal, _ref, {})
  return {
    _ref,
    _class,
    _style,
    val,
    prop
  }
}