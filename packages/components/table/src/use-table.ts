import { useCss, useProvideTable } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TableEmits, TableProps } from "./table"
export const useTable = (_props: TableProps, _emit: SetupContext<TableEmits>['emit']) => {
  const _ref = ref<HTMLElement>(), _el_thead = ref<HTMLElement>(), classVal = computed(() => ({
    name: 'table',
    flex: 'col'
  })), {_class} = useCss(classVal, _ref), _main_class = 'z-grow z-wrap', _body_class = 'z-table-body', {cols, ths, reload} = useProvideTable(_el_thead)
  return {
    _ref,
    _el_thead,
    _class,
    _main_class,
    _body_class,
    cols,
    ths,
    reload
  }
}