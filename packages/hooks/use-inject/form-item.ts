import { FormItemEmits, FormItemProps } from "@ui/components";
import { provideFormId } from "@ui/vars/hooks";
import { computed, inject, reactive, SetupContext, watch } from "vue";
import { EventUpdate } from "@ui/vars";
// 自身存在值，使用自身存在的值，并将自身存在的值反写到父级form表单
// 自身不存在值，从父元素继承值
export const useInjectFormItem = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  const  // 当前form组件的值
    watchCurrentVal = reactive<any>({})
    , setCurrentVal = (key: string, v?: any) => {
      if (v === undefined) {
        delete watchCurrentVal[key]
      } else {
        watchCurrentVal[key] = v
      }
    }, {
      submit = () => { },
      clear = () => { },
      setVal,
      value,
      prop,
      change
    } = inject(provideFormId, {})
    , val = computed(() => props.modelValue || props.value || (props.name && value ? value[props.name] : {}))
    , setVal1 = (key: string, v?: any) => {
      setCurrentVal(key, v)
      if (!props.name && setVal) {
        setVal(key, v)
      }
    }, chageEvent = (ly: string) => {
      change?.(ly)
      emit(EventUpdate, JSON.parse(JSON.stringify(watchCurrentVal)))
    }
  // 监听props.name 改变  将值添加到父Form表单中
  watch(() => props.name, (key, o) => {
    if (setVal) {
      o && setVal(o)
      if (key) {
        setVal(key, watchCurrentVal)
        if (!o) {
          Object.keys(watchCurrentVal || {}).forEach(key => {
            setVal(key)
          })
        }
      }
    }
  }, { immediate: true })
  // 继承值发生改变触发修改组件的值
  watch(() => val.value, (v) => {
    Object.keys(v || {}).forEach(key => {
      setVal1(key, v[key])
    })
  }, { immediate: true })
  return {
    submit,
    clear,
    setVal: setVal1,
    value: watchCurrentVal,
    pValue: value,
    prop,
    change: chageEvent
  }
}