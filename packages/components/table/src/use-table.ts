import { useCss, useProvideTable, initTableStyle, setCss } from "@ui/hooks"
import { ObjStr } from "@ui/vars"
import { ref, SetupContext, computed, watch, Ref } from "vue"
import { TableEmits, TableProps } from "./table"
export const useTable = (props: TableProps, _emit: SetupContext<TableEmits>['emit']) => {
  const _ref = ref<HTMLElement>(), _el_thead = ref(), classVal = computed(() => ({
    name: 'table',
    flex: 'col'
  })), {_class} = useCss(classVal, _ref), _main_class = computed(() => {
    return {
      [setCss('grow')]: true,
      [setCss('wrap')]: !!props.data?.length
    }
  }), {cols, ths, reload} = useProvideTable(_el_thead), checkData: Ref<ObjStr> = ref({}),
  checkedAll = computed(() => {
    if (props.data && props.data.length) {
      const data = checkData.value, key = props.rowKey || ''
      return !props.data.filter(it => !data[it[key]]).length
    } else {
      return false
    }
  })
  watch(() => props.data, (v) => {
    v && v.length && initTableStyle(ths.value, _el_thead.value?.$el)
  })
  function checkAll(judge: boolean) {
    const data = checkData.value, key = props.rowKey || ''
    props.data?.forEach(it => {
      data[it[key]] = judge ? it : null
    })
  }
  function checkedSignle(judge: any, id: string) {
    checkData.value[id] = judge
  }
  return {
    _ref,
    _el_thead,
    _class,
    _main_class,
    cols,
    ths,
    reload,
    checkedAll,
    checkData,
    checkAll,
    checkedSignle
  }
}