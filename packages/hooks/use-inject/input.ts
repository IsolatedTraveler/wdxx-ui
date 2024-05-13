import { SetupContext, inject, computed, ref, watch } from "vue";
import { provideFormId } from "@ui/vars/hooks";
import { InputEmits, InputProps, SelectProps } from "@ui/components";
import { EventUpdate } from "@ui/vars";
export const useInjectInput = (props: InputProps | SelectProps, emit: SetupContext<InputEmits>['emit']) => {
  const { value, prop, setVal } = inject(provideFormId, {})
    // 获取从父元素继承的值
    , inheritedValue = computed(() => {
      return value?.[props.name]
    })
    , val = computed(() => props.modelValue || props.value || inheritedValue.value)
    , currentVal = ref(props.def || val.value)
  // 继承值发生改变触发修改组件的值
  watch(() => val.value, (v) => {
    currentVal.value = v
  })
  // 监听组件key值改变，通过key值将组件值写入父元素
  watch(() => props.name, (v) => {
    if (props.name) {
      setVal?.(v, currentVal.value)
    }
  }, { immediate: true })
  // 监听组件值改变，修改
  watch(() => currentVal.value, (v) => {
    if (props.name) {
      setVal?.(props.name, currentVal.value)
    }
    emit(EventUpdate, JSON.parse(JSON.stringify(v || '')))
  }, { immediate: true })
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