import { useCss, useProvideTable, initTableStyle, setCss, getStylePx } from "@ui/hooks"
import { ref, SetupContext, computed, watch, onMounted, nextTick } from "vue"
import { TableEmits, TableProps } from "./table"
export const useTable = (props: TableProps, _emit: SetupContext<TableEmits>['emit']) => {
  const _ref = ref<HTMLElement>(), _el_thead = ref<HTMLElement>(), classVal = computed(() => ({
    name: 'table',
    flex: 'col'
  })), {_class} = useCss(classVal, _ref), _main_class = computed(() => {
    return {
      [setCss('grow')]: true,
      [setCss('wrap')]: !!props.data?.length
    }
  }), {cols, ths, reload} = useProvideTable(_el_thead), width = ref('100%')
  function setWidth() {
    nextTick(() => {
      const w = _el_thead.value?.offsetWidth
      width.value = w ? getStylePx(w) : '100%'
    })
  }
  watch(() => props.data, (v) => {
    v && v.length && initTableStyle(ths.value, _el_thead.value)
    setWidth()
  })
  onMounted(() => {
    setWidth()
  })
  return {
    _ref,
    _el_thead,
    _class,
    _main_class,
    cols,
    ths,
    reload,
    width
  }
}