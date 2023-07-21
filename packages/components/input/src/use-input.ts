import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { InputEmits, InputProps } from "./input"
import { useInjectInput } from "@ui/hooks/use-inject"
export const useInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const {prop } = useInjectInput(props)
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'input',
    size:prop?.value?.size,
    add: 'form-item'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class,
    prop:computed(()=>{
      const value = prop?.value || ({} as any)
      const {disabled,readonly,tabIndex} = value
      return {
        disabled:props.disabled || disabled,
        readonly:props.readonly || readonly,
        tabIndex,
        placeholder:props.placeholder,
        type:props.type
      }
    })
  }
}