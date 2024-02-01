import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { InputEmits, InputProps } from "./input"
import { useInjectInput, useInputMixins } from "@ui/hooks"
import { EventUpdate } from "@ui/vars"
export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const { prop, value, changeVal } = useInjectInput(props)
  const _ref = ref<HTMLInputElement>(), classVal = computed(() => ({
    name: 'input',
    size: prop?.value?.size
  })), { _class, _style } = useCss(classVal, _ref, { span: false, auto: false })
  useInputMixins(props, _class.value, _style.value, _ref, {})
  function submit(v: Event) {
    const el = v.target as HTMLInputElement, val = el.value
    if (props.name || props.name === 0) {
      changeVal && changeVal(props.name, val)
    } else {
      emit(EventUpdate, val)
    }
  }
  return {
    _ref,
    _class,
    _style,
    prop: computed(() => {
      const value = prop?.value || ({} as any)
      const { disabled, readonly, tabIndex } = value
      return {
        disabled: props.disabled || disabled,
        readonly: props.readonly || readonly,
        tabIndex,
        placeholder: props.placeholder,
        type: props.type
      }
    }),
    value,
    submit
  }
}