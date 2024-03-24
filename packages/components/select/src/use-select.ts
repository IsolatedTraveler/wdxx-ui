import { useCssInit, useInjectInput, useInputMixins } from "@ui/hooks"
import { ref, SetupContext, computed, onMounted, defineAsyncComponent } from "vue"
import { SelectEmits, SelectProps } from "./select"
export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
  // 弹出层组件异步加载
  const comName = ref('zTree'), comObj: any = {
    zTree: defineAsyncComponent(() => import('@ui/components/tree'))
  }, com = computed(() => comObj[comName.value])
    // 是否显示弹出层
    , show = ref<boolean>(false), showPop = function () {
      _input.value?.focus()
      show.value = !show.value
    }
    // 相关元素定义
    , _pop = ref<any>(), _ref = ref<HTMLButtonElement>(),_input=ref<HTMLInputElement>()
    // css样式
    , { _class, _style, classVal, styleVal } = useCssInit(props, 'select', { cssClass: ['size'], classAdd: ['multi'] })
    // 通用值处理方案
    , { val, prop } = useInjectInput(props, emit)
    , valObj = ref<Array<any>>([])
    , showVal = computed(() => {
      const obj: any = valObj.value
      if (obj) {
        return props.multi ? obj.map((it: any) => it[props.showId]) : obj[props.showId]
      } else {
        return ''
      }
    })
  // 样式二次处理
  useInputMixins(props, classVal, styleVal, _ref, {})
  function setVal(v: any) {
    valObj.value = v
    if (props.multi) {

    } else {
      show.value = false
    }
  }
  const isShow = computed(() => {
    const v = val.value
    return v && v.length && props.multi
  })
  onMounted(() => {
    _pop.value.init(_ref.value)
  })
  return {
    _ref,
    _pop,
    _input,
    _class,
    _style,
    val,
    prop,
    isShow,
    show,
    showVal,
    showPop,
    com,
    setVal
  }
}