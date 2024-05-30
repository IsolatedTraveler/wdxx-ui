import { FormItemEmits, FormItemProps } from "@ui/components";
import { provideFormId } from "@ui/vars/hooks";
import { computed, inject, reactive, SetupContext, watch } from "vue";
import { EventUpdate } from "@ui/vars";
// 自身存在值，使用自身存在的值，并将自身存在的值反写到父级form表单
// 自身不存在值，从父元素继承值
export const useInjectFormItem = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  var keys: string[] = []
  const  // 当前form组件的值
    watchCurrentValBak = reactive<any>({})
    , watchCurrentVal = reactive<any>({})
    , setWatchCurrentVal = (obj: any, key: string, v?: any, judge?: boolean) => {
      if (v === undefined) {
        judge && (keys = keys.filter(k => k !== key))
        delete obj[key]
      } else {
        judge && keys.push(key)
        obj[key] = v
      }
    }
    , setCurrentVal = (key: string, v?: any) => {
      console.log(key, v)
      setWatchCurrentVal(watchCurrentValBak, key, v, true)
      if (props.name !== undefined) setWatchCurrentVal(watchCurrentVal, key, v)
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
      emit(EventUpdate, JSON.parse(JSON.stringify(watchCurrentValBak)))
    }
  // 监听props.name 改变  将值添加到父Form表单中
  watch(() => props.name, (key, o) => {
    // 判断是否存在待写入的父组件
    if (setVal) {
      // 当前值是否写入
      if (key !== undefined) {
        // 将值写入父组件
        setVal(key, watchCurrentValBak)
        keys.forEach(key => {
          setWatchCurrentVal(watchCurrentVal, key, watchCurrentValBak[key])
        })
      } else {
        keys.forEach(key => {
          setWatchCurrentVal(watchCurrentVal, key)
        })
        // 移除watchCurrentVal中的值
      }
      // 存在历史写入值，移除历史写入值
      if (o !== undefined) {
        setVal(o)
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
    prop: computed(() => {
      const val = prop?.value || ({} as any)
      const { disabled, readonly, size, tabIndex, labelSize } = val
      return {
        disabled: props.disabled === undefined ? disabled : props.disabled,
        readonly: props.readonly === undefined ? readonly : props.readonly,
        size: props.size === undefined ? size : props.size,
        tabIndex,
        labelSize: props.labelSize === undefined ? labelSize : props.labelSize
      }
    }),
    change: chageEvent
  }
}