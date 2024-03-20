import { useCssInit, useInjectInput, useInputMixins } from "@ui/hooks"
import { ref, SetupContext, computed, onMounted } from "vue"
import { SelectEmits, SelectProps } from "./select"
export const useSelect = (props: SelectProps, emit: SetupContext<SelectEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), _pop = ref<any>(), _pop_content = ref<any>(),
    { _class, _style, classVal, styleVal } = useCssInit(props, 'select', { cssClass: ['size'], classAdd: ['multi'] }),
    { val, prop } = useInjectInput(props, emit), valObj = ref<Array<any>>([]),
    show = ref<boolean>(false),
    showVal = computed(() => {
      const obj: Array<any> = valObj.value
      if (obj) {
        return props.multi ? obj.map((it: any) => it[props.showId]) : obj[0]?.[props.showId]
      } else {
        return ''
      }
    }),
    isShow = computed(() => {
      const v = val.value
      return v && v.length && props.multi
    })
  useInputMixins(props, classVal, styleVal, _ref, {})
  onMounted(() => {
    _pop.value.init(_ref.value)
  })
  function showPop() {
    show.value = true
  }
  return {
    _ref,
    _pop,
    _pop_content,
    _class,
    _style,
    val,
    prop,
    isShow,
    show,
    showVal,
    showPop
  }
}