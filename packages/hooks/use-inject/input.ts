import { InputEmits, InputProps } from "@ui/components/input/src/input";
import { SetupContext, inject, ref, watch } from "vue";
import { provideFormId } from "@ui/vars/hooks";
import { EventUpdate } from "@ui/vars";
export const useInjectInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const { value = { value: {} }, prop } = inject(provideFormId, {}),
    val = ref<any>('')
  watch(() => ({ v: props.modelValue || props.value, key: props.name, obj: value.value }), ({ v, key, obj }) => {
    val.value = v || obj?.[key] || props.def
    if (key || key === 0) {
      obj[key] = val.value
    }
  }, { immediate: true })
  watch(() => ({ v: val.value, key: props.name }), ({ v, key }) => {
    emit(EventUpdate, v)
    if (key || key === 0) {
      value.value[key] = v
    }
  })
  return {
    val,
    prop
  }
}