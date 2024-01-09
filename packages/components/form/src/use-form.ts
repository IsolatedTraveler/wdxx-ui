import { useCss, useFlexMixins, useProvideForm } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FormEmits, FormProps } from "./form"
export const useForm = (props: FormProps, emit: SetupContext<FormEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'form'
  })), { _class, _style } = useCss(classVal, _ref)
  useFlexMixins(props, _class.value, _style.value, _ref)
  useProvideForm(props)
  return {
    _ref,
    _class
  }
}