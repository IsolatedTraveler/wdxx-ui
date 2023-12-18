import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, Ref, nextTick, ComponentInternalInstance } from "vue"
import { TableEmits, TableProps } from "./table"
import { ObjAny } from "@ui/vars"
import { getCols } from "./getCols"
export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit'], instance: ComponentInternalInstance | null) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'table'
  })), { _class } = useCss(classVal, _ref), keys: Ref<Array<ObjAny>> = ref([]),
    trs: Ref<Array<Array<ObjAny>>> = ref([])
  function setStyle() {
    nextTick(() => {
      console.log(instance?.refs)
    })
  }
  watch(() => props.cols, (v) => {
    const { cols, tds } = getCols(v)
    keys.value = tds
    trs.value = cols
    setStyle()
  }, { immediate: true, deep: true })
  return {
    _ref,
    _class,
    trs,
    keys
  }
}