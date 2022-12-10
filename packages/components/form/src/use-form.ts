import { useCss } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { FormEmits, FormProps } from "./form"
export const useForm = (props: FormProps, emit: SetupContext<FormEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'form'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}