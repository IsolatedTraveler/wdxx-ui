import { useCssInit, useInjectInput, useInputMixins } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { SelectEmits, SelectProps } from "./select"
export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(),
    { _class, _style, classVal, styleVal } = useCssInit(props, 'select', { cssClass: ['size'], classAdd: ['multi'] }),
    { val, prop } = useInjectInput(props, emit),
    showVal = ref<any>(''),
    isShow = computed(() => {
      var val = showVal.value
      return props.multi && val.length
    })
  useInputMixins(props, classVal, styleVal, _ref, {})
  return {
    _ref,
    _class,
    _style,
    val,
    prop,
    isShow,
    showVal
  }
}