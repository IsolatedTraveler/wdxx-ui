import { FormItemsProps } from "@ui/components/form-items/src/form-items";
import { provideFormId } from "@ui/vars/hooks";
import { computed, inject } from "vue";
export const useInjectFormItems = (props: FormItemsProps) => {
  const { submit, clear, prop } = inject(provideFormId, {})
  return {
    submit,
    clear,
    prop: computed(() => {
      const value = prop?.value || ({} as any)
      const { disabled, readonly, size, validateFun, tabIndex } = value
      return {
        disabled: props.disabled || disabled,
        readonly: props.readonly || readonly,
        size,
        tabIndex,
        validateFun: Object.assign({}, validateFun, props.validateFun)
      }
    })
  }
}