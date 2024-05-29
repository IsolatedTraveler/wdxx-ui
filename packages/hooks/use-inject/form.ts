import { computed, inject, watch, SetupContext, reactive } from "vue";
import { FormEmits, FormProps } from "@ui/components/form/src/form";
import { provideFormId } from "@ui/vars/hooks";
import { EventUpdate } from "@ui/vars";
// 自身存在值，使用自身存在的值，并将自身存在的值反写到父级form表单
// 自身不存在值，从父元素继承值
export const useInjectForm = (props: FormProps, emit: SetupContext<FormEmits>['emit']) => {
  // 判断当前form表单是否包含在其他form表单内，如果在获取父form表单数据，如果不在，初始化默认数据，包括submit  提交事件
  // clear 重置数据事件
  // setVal 在form表单内，将当前表单数据写入父表单
  // value  父表单数据
  // prop   父表单属性【size、state、labelSize等】
  const
    // 当前form组件的值
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
    // 当前form组件传入的值或则从父组件继承而来的值，优先取传入的值
    , val = computed(() => props.modelValue || props.value || (props.name && value ? value[props.name] : {}))
    , chageEvent = (ly: string) => {
      change?.(ly)
      emit(EventUpdate, JSON.parse(JSON.stringify(watchCurrentVal)))
    }
  // 监听props.name 改变  将值添加到父Form表单中
  watch(() => props.name, (key, o) => {
    if (setVal) {
      o && setVal(o)
      key && setVal(key, watchCurrentVal)
    }
  }, { immediate: true })
  // 继承值发生改变触发修改组件的值
  watch(() => val.value, (v) => {
    Object.keys(v || {}).forEach(key => {
      setCurrentVal(key, v[key])
    })
  }, { immediate: true, deep: true })
  // 监听组件值改变，修改
  watch(() => watchCurrentVal, (v) => {
  }, { deep: true })
  return {
    submit,
    clear,
    change: chageEvent,
    setVal: setCurrentVal,
    value: watchCurrentVal,
    prop: computed(() => {
      const val = prop?.value || ({} as any)
      const { disabled, readonly, size, tabIndex } = val
      return {
        disabled: props.disabled || disabled,
        readonly: props.readonly || readonly,
        size: size || props.size,
        tabIndex: (tabIndex || 0) * 100 + ((props.tabIndex as number) || 0),
      }
    })
  }
}