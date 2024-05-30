import { SetupContext, inject, computed, ref, watch } from "vue";
import { provideFormId } from "@ui/vars/hooks";
import { InputEmits, InputProps, SelectProps } from "@ui/components";
import { EventUpdate } from "@ui/vars";
export const useInjectInput = (props: InputProps | SelectProps, emit: SetupContext<InputEmits>['emit']) => {
  const { value, prop, setVal, pValue, change } = inject(provideFormId, {})
    , val = computed(() => {
      if (props.modelValue !== undefined) return props.modelValue
      if (props.value !== undefined) return props.value
      if (props.name === undefined) return ''
      if (value[props.name] !== undefined) return value[props.name]
      return pValue[props.name] || ''
    })
    , currentVal = ref(props.def || val.value)
  // 继承值发生改变触发修改组件的值
  watch(() => val.value, (v) => {
    currentVal.value = v
  })
  // 监听组件key值改变，通过key值将组件值写入父元素
  watch(() => ({ key: props.name, v: currentVal.value }), ({ key, v }, o) => {
    if (key && setVal) {
      setVal(key, v)
    }
    if (v !== o?.v) {
      props.name && change?.(props.name)
      emit(EventUpdate, JSON.parse(JSON.stringify(v || '')))
    }
  }, { immediate: true, deep: true })
  return {
    val: currentVal,
    prop: computed(() => {
      const v = prop?.value
      return {
        disabled: props.disabled === undefined ? v?.disabled : props.disabled,
        readonly: props.readonly === undefined ? v?.readonly : props.readonly,
        tabIndex: 0
      }
    })
  }
}