import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TableEmits, TableProps } from "./table"
export const useTable = (_props: TableProps, _emit: SetupContext<TableEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'table'
  })), {_class} = useCss(classVal, _ref), _main_class = '', _body_class = '', cols = ref([]), heads = ref([])
  return {
    _ref,
    _class,
    _main_class,
    _body_class,
    cols,
    heads
  }
}