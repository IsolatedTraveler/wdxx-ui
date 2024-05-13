import { FormItemEmits, FormItemProps } from "@ui/components";
import { provideFormId } from "@ui/vars/hooks";
import { computed, inject, reactive, SetupContext, watch } from "vue";
import { EventUpdate } from "@ui/vars";
// 自身存在值，使用自身存在的值，并将自身存在的值反写到父级form表单
// 自身不存在值，从父元素继承值
export const useInjectFormItem = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  const {
    submit = () => { },
    clear = () => { },
    setVal,
    value,
    prop,
    labelSize
  } = inject(provideFormId, {})
    // 获取从父元素继承的值
    , inheritedValue = computed(() => {
      return props.name ? value?.[props.name] : value
    })
    , watchCurrentVal = reactive<any>({})
    , val = computed(() => props.modelValue || props.value || inheritedValue.value)
    , setVal1 = (key: string, v: any) => {
      watchCurrentVal[key] = v
      if (!props.name)
        setVal?.(key, v)
    }
  // 继承值发生改变触发修改组件的值
  watch(() => val.value, (v) => {
    Object.keys(v || {}).forEach(key => {
      watchCurrentVal[key] = v[key]
    })
  }, { immediate: true })
  // 监听组件key值改变，通过key值将组件值写入父元素
  watch(() => props.name, (v) => {
    if (props.name) {
      setVal?.(v, watchCurrentVal)
    }
  }, { immediate: true })
  // 监听组件值改变，修改
  watch(() => watchCurrentVal, (v) => {
    emit(EventUpdate, JSON.parse(JSON.stringify(v || '')))
  }, { immediate: true })
  return {
    submit,
    clear,
    setVal: setVal1,
    value: watchCurrentVal,
    prop,
    labelSize
  }
}