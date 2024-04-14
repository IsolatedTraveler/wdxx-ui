import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, Ref, nextTick, ComponentInternalInstance } from "vue"
import { TableEmits, TableProps } from "./table"
import { getCols,ThCol } from "./getCols"
export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit'], instance: ComponentInternalInstance | null) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'table'
  })), { _class } = useCss(classVal, _ref), keys: Ref<Array<ThCol>> = ref([]),
    trs: Ref<Array<Array<ThCol>>> = ref([])
  function setStyle() {
    nextTick(() => {
      const ref = instance?.refs
      if (ref && _ref.value) {
        const tableRect = _ref.value.getBoundingClientRect();
        keys.value.forEach((it,i) => {
          const id = it.id, fixed = it.fixed
          if (fixed) {
            const el:HTMLTableCellElement = (ref[id] as Array<HTMLTableCellElement>)?.[0]
            , thRect = el.getBoundingClientRect()
            if (fixed === 'left') {
              it._thTdStyle.left = (thRect.left - tableRect.left) + 'px'
            } else {
             it._thTdStyle.right  = (tableRect.right  - thRect.right) + 'px'
            }
          }
        })
      } else {
        setStyle()
      }
    })
  }
  watch(() => props.cols, (v) => {
    const { cols, tds } = getCols(v as any)
    keys.value = tds
    trs.value = cols
  }, { immediate: true, deep: true })
  watch(()=> props.data, setStyle, {immediate: true})
  return {
    _ref,
    _class,
    trs,
    keys
  }
}