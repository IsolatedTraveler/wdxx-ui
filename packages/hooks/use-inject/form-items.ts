import { FormItemEmits, FormItemProps } from "@ui/components";
import { EventUpdate } from "@ui/vars";
import { provideFormId } from "@ui/vars/hooks";
import { inject, ref, watch, SetupContext } from "vue";
export const useInjectFormItems = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  const { submit, clear, prop, value = { value: {} } } = inject(provideFormId, {})
    , val = ref<any>()
  watch(() => ({ v: props.modelValue || props.value, key: props.name, obj: value.value }), ({ v, key, obj }) => {
    if (key || key === 0) {
      v = v || obj?.[key]
      if (v) {
        val.value = v
      } else {
        val.value = props.isArr ? [] : {}
        emit(EventUpdate, val.value)
      }
      obj[key] = val.value
    } else {
      val.value = obj
    }
  }, { immediate: true })
  return {
    submit,
    clear,
    prop,
    value: val
  }
}