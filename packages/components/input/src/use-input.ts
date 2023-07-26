import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { InputEmits, InputProps } from "./input"
import { useInjectInput } from "@ui/hooks/use-inject"
import { EventUpdate } from "@ui/vars"
export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const { prop, value: value1, changeVal } = useInjectInput(props)
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'input',
    size: prop?.value?.size,
    auto: props.span ? undefined : props.auto,
    span: props.span,
    flex: 'row'
  })), { _class, _style } = useCss(classVal, _ref, { span: false, auto: false })

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
    value1,
    submit
  }
}