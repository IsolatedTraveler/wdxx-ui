import { computed, inject } from "vue";
import { FormProps } from "@ui/components/form/src/form";
import { provideFormId } from "@ui/vars/hooks";
export const useInjectForm = (props: FormProps) => {
  let obj: any
  const {
    submit = () => { },
    clear = () => { },
    changeVal,
    value,
    prop
  } = inject(provideFormId, {}),
    val = computed(() => {
      if (props.name || props.name === 0) {
        if (value?.value) {
          obj = value.value[props.name]
          if (!obj && changeVal) {
            obj = {}
            changeVal(props.name || '', obj)
          }
        }
      } else {
        obj = props.modelValue || props.value || {}
      }
      return obj
    })
  return {
    submit,
    clear,
    value: val,
    changeVal(key: string | number, v: any) {
      obj[key] = v
    },
    prop: computed(() => {
      const val = prop?.value || ({} as any)
      const { disabled, readonly, size, tabIndex, validateFun } = val
      return {
        disabled: props.disabled || disabled,
        readonly: props.readonly || readonly,
        size,
        tabIndex: (tabIndex || 0) * 100 + ((props.tabIndex as number) || 0),
        validateFun: Object.assign({}, validateFun, props.validateFun)
      }
    })
  }
}