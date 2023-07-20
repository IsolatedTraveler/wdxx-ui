import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { FormItemsEmits, FormItemsProps } from "./form-items"
export const useFormItems = (props: FormItemsProps, emit: SetupContext<FormItemsEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'form-items'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}