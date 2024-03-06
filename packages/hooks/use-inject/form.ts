import { computed, inject, watch, ref, SetupContext } from "vue";
import { FormEmits, FormProps } from "@ui/components/form/src/form";
import { provideFormId } from "@ui/vars/hooks";
import { EventUpdate } from "@ui/vars";
// 自身存在值，使用自身存在的值，并将自身存在的值反写到父级form表单
// 自身不存在值，
export const useInjectForm = (props: FormProps, emit: SetupContext<FormEmits>['emit']) => {
  const {
    submit = () => { },
    clear = () => { },
    value,
    prop
  } = inject(provideFormId, {}),
    val = ref<any>(props.def || {})
  watch(() => ({ v: props.modelValue || props.value, key: props.name, obj: value?.value }), ({ v, key, obj }) => {
    v = v || obj?.[key]
    if (v) {
      val.value = v
    } else {
      val.value = Object.assign({}, props.def)
      emit(EventUpdate, val.value)
    }
    if ((key || key === 0) && obj) {
      obj[key] = val.value
    }
  }, { immediate: true })
  return {
    submit,
    clear,
    value: val,
    prop: computed(() => {
      const val = prop?.value || ({} as any)
      const { disabled, readonly, size, tabIndex } = val
      return {
        disabled: props.disabled || disabled,
        readonly: props.readonly || readonly,
        size,
        tabIndex: (tabIndex || 0) * 100 + ((props.tabIndex as number) || 0),
      }
    })
  }
}