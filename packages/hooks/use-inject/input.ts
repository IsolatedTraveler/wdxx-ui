import { SetupContext, inject, ref, watch, computed } from "vue";
import { provideFormId } from "@ui/vars/hooks";
import { EventUpdate } from "@ui/vars";
import { InputEmits, InputProps, SelectProps } from "@ui/components";
export const useInjectInput = (props: InputProps | SelectProps, emit: SetupContext<InputEmits>['emit']) => {
  const { value = { value: {} }, prop } = inject(provideFormId, {}),
    val = ref<any>(''),
    v = computed(() => {
      return value.value[props.name] || ''
    })
  watch(() => ({ v: props.modelValue || props.value, v1: v.value }), ({ v, v1 }) => {
    val.value = v || v1 || props.def
  }, { immediate: true })
  watch(() => ({ v: val.value, key: props.name }), ({ v, key }) => {
    emit(EventUpdate, v)
    if (key || key === 0) {
      value.value[key] = v
    }
  }, { immediate: true })
  return {
    val,
    prop
  }
}