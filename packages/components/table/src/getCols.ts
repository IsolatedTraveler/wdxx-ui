import { uuid } from "@ui/utils"
import { ObjAny } from "@ui/vars"
type ThColFixed = 'left' | 'right' | boolean
interface ThCol {
  child?: Array<ThCol>
  id?: string
  fixed?: ThColFixed
  width: any,
  minWidth: any
  class?: string
  _childLen: number
  _colStyle: {
    width: string
    minWidth: string
  }
  _maxRowLen: number
  _rowspan: number
  _colspan: number
  _keys: ObjAny[]
}
let tds: Array<ObjAny> = [], cols: Array<Array<ObjAny>> = [], thLen = 0
function setCols(arr: Array<ThCol>, row: number = 0) {
  const data: Array<ObjAny> = cols[row] = cols[row] || [], keys: Array<ObjAny> = []
  let childLen = 0, firstColRowSpan = 0
  arr.forEach((it, i) => {
    data.push(it)
    const jtSite = thLen - it._maxRowLen + 1
    it._rowspan = jtSite - row
    if (it._childLen) {
      const v = setCols(it.child || [], jtSite)
      childLen += it._colspan = v.childLen
      it._keys = v.keys
      keys.push(...v.keys)
      if (i == 0) {
        firstColRowSpan = it._rowspan
      }
    } else {
      childLen++
      keys.push(it)
    }
  })
  if (firstColRowSpan > 1) {
    cols[row + 1][0]._plugStyle = { borderLeftWidth: '5px' }
  }
  return { childLen, keys }
}
function getLen(arr: Array<ThCol>, row: number = 0, fixed: ThColFixed | undefined = undefined): number {
  const data = arr.map(it => {
    var lastRowIndex = row
    it.fixed = fixed === undefined ? (it.fixed === true ? 'left' : 'right') : (fixed || false)
    if (it.child && it.child.length) {
      it._childLen = it.child.length
      lastRowIndex = getLen(it.child, row + 1, it.fixed)
    } else {
      it.id = it.id || uuid()
      it._colStyle = { width: it.width, minWidth: it.minWidth }
      tds.push(it)
    }
    it._maxRowLen = lastRowIndex - row
    return lastRowIndex
  })
  return Math.max(...data)
}
export function getCols(arr: Array<ThCol>) {
  arr = JSON.parse(JSON.stringify(arr))
  tds = []
  cols = []
  thLen = getLen(arr)
  setCols(arr)
  return { cols, tds }
}