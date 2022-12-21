import { TdObj, ThObj } from "@ui/vars"
import { provide, InjectionKey, ref, Ref, computed, ComputedRef, onMounted, warn, nextTick } from "vue"
export interface ProvideTableId {
  addThs: (row: number, th: Ref<ThObj>, id: string) => null
  removeThs: (row: number, id: string) => null
  addTds: (td: Ref<TdObj>, id: string) => null
  removeTds: (id: string) => null
  rows: ComputedRef<number>
  reload: Ref<boolean>
}
interface GetPreId {
  i: number
  o?: ThObj
}
export const provideTableId:InjectionKey<ProvideTableId> = Symbol('table')
function getPreObj(tr: Array<any>, cid: string): GetPreId {
  const i = tr.findIndex(({value: {id}}) => id == cid) + 1, o = tr[i]?.value
  return {i, o}
}
function getPreById(tr: Array<any>, cid: string, trs?: any, row?: number): GetPreId {
  if (trs) {
    return getPreObjById(row as number, trs, cid)
  } else {
    return getPreObj(tr, cid)
  }
}
// 逻辑待完善
function getPreObjById(row: number, arrs: Array<Array<Ref<ThObj>>>, cid: string): GetPreId {
  if (cid) {
    const tr = arrs[row]
    if (tr.length) {
      const i = tr.findIndex(({value: {id}}) => id == cid) + 1
      if (i === 0) {
        return getPreObjById(row + 1, arrs, cid)
      }
      return {i, o: tr[i]?.value}
    } else {
      warn(`not found module th<${cid}>`)
    }
  }
  return {i: -1}
}
function setThTd(tr: Array<any>, v: Ref<ThObj | TdObj>, cid: string, trs?: any, row?:number) {
  if (cid) {
    const {i, o} = getPreById(tr, cid, trs, row)
    if (o && !o.show) {
      tr[i] = v
    } else {
      tr.splice(i, 0, v)
    }
  } else {
    tr.unshift(v)
  }
}
export function initTableStyle(ths: Array<Array<Ref<ThObj>>>, tbody: HTMLElement | undefined) {
  if (tbody) {
    ths.forEach(tr => {
      tr.forEach(({value: {initStyle}}, i) => {
        initStyle?.(tbody)
      })
    })
  }
}
export const useProvideTable = (tbody: Ref<any>) => {
  const cols: Ref<Array<Ref<TdObj>>> = ref([]), ths: Ref<Array<Array<Ref<ThObj>>>> = ref([]), thsV = ths.value
  , reload = ref(false)
  let judge = false
  onMounted(() => {
    judge = true
    nextTick(() => {
      initTableStyle(thsV, tbody.value?.$el)
    })
  })
  provide(provideTableId, {
    addThs(row, th, cid) {
      const tr = thsV[row] || []
      if (judge) {
        setThTd(tr, th, cid, thsV, row)
      } else {
        tr.push(th)
        thsV[row] = tr
      }
    },
    addTds(td, cid) {
      const colsV = cols.value
      if (judge) {
        setThTd(colsV, td, cid)
        initTableStyle(thsV, tbody.value?.$el)
      } else {
        colsV.push(td)
      }
    },
    removeThs(row, cid) {
      thsV[row] = thsV[row].filter(({value: {id}}) => id != cid)
    },
    removeTds(cid) {
      cols.value = cols.value.filter(({value: {id}}) => id != cid)
    },
    rows: computed(() => ths.value.length),
    reload
  })
  return {
    cols,
    ths,
    reload
  }
}