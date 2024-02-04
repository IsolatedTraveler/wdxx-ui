import { InputEmits, InputProps } from "@ui/components/input/src/input";
import { Ref, SetupContext, computed, inject, ref, watch } from "vue";
import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "@ui/vars/hooks";
import { EventUpdate } from "@ui/vars";
export const useInjectInput = (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const { prop, value } = inject(provideFormItemsId, inject(provideFormId, {})),
    _value: Ref<string | number> = ref('')
  watch(() => _value.value, (v) => {
    if (value && props.name) {
      value.value[props.name] = v
    }
    emit(EventUpdate, v)
  }, { immediate: true })
  watch(() => props.name && value ? value.value[props.name] : '', (v) => {
    _value.value = v
  }, { immediate: true })
  return {
    prop: computed(() => {
      const val = prop?.value || ({} as any)
      const { disabled, readonly, size, tabIndex } = val
      return {
        disabled: props.disabled === false ? false : (props.disabled || disabled),
        readonly: props.readonly === false ? false : (props.readonly || readonly),
        size: props.size || size,
        tabIndex: (tabIndex || 0) * 100 + ((props.tabIndex as number) || 0)
      }
    }),
    _value
  }
}