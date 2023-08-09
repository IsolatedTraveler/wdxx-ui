import { InputProps } from "@ui/components/input/src/input";
import { computed, inject } from "vue";
import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "@ui/vars/hooks";
export const useInjectInput = (props: InputProps) => {
  const { submit, clear, prop, value, changeVal } = inject(provideFormItemsId, inject(provideFormId, {}))
  return {
    submit,
    clear,
    changeVal,
    prop: computed(() => {
      const val = prop?.value || ({} as any)
      const { disabled, readonly, size, validateFun, tabIndex } = val
      return {
        disabled: props.disabled || disabled,
        readonly: props.readonly || readonly,
        size,
        tabIndex: (tabIndex || 0) * 100 + ((props.tabIndex as number) || 0),
        validateFun: Object.assign({}, validateFun, props.validateFun)
      }
    }),
    value: computed(() => {
      if (props.name || props.name === 0) {
        if (value?.value) {
          return value.value[props.name] || ''
        }
      } else {
        return props.modelValue || props.value || ''
      }
    })
  }
}