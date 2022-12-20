import { provide, InjectionKey, inject, ref, WatchCallback, Slots, warn, ComputedRef, computed } from "vue"
import { ObjAny } from "@ui/vars"
import { ProvideTableId, provideTableId } from "./table"
import { ThProps } from "@ui/components/table/src/th"
export interface ProvideThId {
  current_row: number
  addTh: Function
  removeTh: Function
  changeColspan: WatchCallback
  changeChildRow: WatchCallback
}
export const provideThId:InjectionKey<ProvideThId> = Symbol('th')
export const useProvideTh = (current_row: number, slots: Slots, rows: ComputedRef<number>, props: ObjAny) => {
  const colspan = ref(0), child_row = ref(0), rowspan = computed(() => rows.value - current_row - child_row.value)
  provide(provideThId, {
    current_row,
    addTh(current_row: number, row: number = 0) {
      colspan.value += current_row
      const child_row_v = row + 1
      child_row.value = Math.max(child_row.value, child_row_v)
    },
    removeTh(current_row: number) {
      colspan.value -= current_row
      if (!slots?.default) {
        child_row.value = 0
      }
    },
    changeColspan(a: number, b:number) {
      colspan.value += a - b
    },
    changeChildRow(a:number, b:number) {
      child_row.value += a - b
    }
  })
  return {
    colspan,
    child_row,
    rowspan
  }
}
export const useInjectTh = (props: ThProps) => {
  const {current_row, addTh, removeTh, changeColspan, changeChildRow} = inject(provideThId, {current_row: -1} as ProvideThId)
  try {
    const {addThs, removeThs, addTds, removeTds , rows, reload} = inject(provideTableId, {} as ProvideTableId)
    return {
      current_row: current_row + 1,
      addTh,
      removeTh,
      changeColspan,
      changeChildRow,
      addThs,
      removeThs,
      addTds,
      removeTds,
      rows,
      reload
    }
  } catch (e) {
    warn(`Module Th<${props.label || props.name}> can only be used as a sub module of module Table`)
  }
  return {
    rows: computed(() => 0)
  }
}