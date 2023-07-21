import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FormItemEmits, FormItemProps } from "./form-item"
export const useFormItem = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'form-item'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}