import { useCss, useProvideForm } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FormEmits, FormProps } from "./form"
export const useForm = (props: FormProps, emit: SetupContext<FormEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'form'
  })), {_class} = useCss(classVal, _ref)
  useProvideForm(props)
  return {
    _ref,
    _class
  }
}