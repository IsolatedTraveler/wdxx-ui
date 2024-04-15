import { uuid } from "@ui/utils"
import { ObjAny, ThCol, ThColFixedV } from "@ui/vars"

function setCols(arr: Array<ThCol>, thLen: number, row: number = 0) {
  const data: Array<ObjAny> = cols[row] = cols[row] || [], keys: Array<ObjAny> = []
  let childLen = 0, firstColRowSpan = 0
  console.log('headLen:', thLen + 1)
  arr.forEach((it, i) => {
    data.push(it)
    console.log(it.title, it._maxRowLen)
    const jtSite = thLen - it._maxRowLen + 1
    it._rowspan = jtSite - row
    if (it._childLen) {
      const v = setCols(it.child || [], thLen, jtSite)
      childLen += it._colspan = v.childLen
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
    cols[row + 1][0]._thStyle = { borderLeftWidth: '5px' }
  }
  return { childLen, keys }
}
type GetLenType = 1 | 2 | 3
// 1 left 2 空白  3 right
function getLen(arr: Array<ThCol>, row: number = 0, tds: Array<ThCol>, fixed: ThColFixedV | undefined = undefined): number {
  var type: GetLenType = 1, fixedV: ThColFixedV | undefined = fixed, lastRowIndex = row
  const data = arr.map(it => {
    if (row === 0) {
      fixedV = fixed || it.fixed === 'right' ? 'right' : it.fixed ? 'left' : undefined
      if (type === 2) {
        if (fixedV === 'left') {
          fixedV = undefined
          console.warn(it.title + '之前已存在非左侧固定列，此处不能为左侧固定列')
        }
      } else if (type === 3) {
        if (fixedV !== 'right') {
          fixedV = 'right'
          console.warn(it.title + '之前已存在右侧固定列，此处只能为右侧固定列')
        }
      }
      if (fixedV === undefined) {
        type = 2
      } else if (fixedV === 'right') {
        type = 3
      }
    }
    it.fixed = fixedV
    it.id = it.id || uuid()
    it._thTdStyle = { width: it.width, minWidth: it.minWidth }
    it._thStyle = {}
    if (fixedV) {
      it._colClass = {
        'z-pos--sticky': true
      }
    } else {
      it._colClass = {
        'z-pos--none': true
      }
    }
    if (it.child && it.child.length) {
      it._childLen = it.child.length
      lastRowIndex = getLen(it.child, row + 1, fixedV)
    } else {
      tds.push(it)
    }
    it._maxRowLen = lastRowIndex - row
    return lastRowIndex
  })
  return Math.max(...data)
}
export function getCols(arr: Array<ThCol>) {
  arr = JSON.parse(JSON.stringify(arr))
  var tds: Array<ThCol> = []
  var cols: Array<ThCol> = []
  setCols(arr, getLen(arr) + 1)
  return { cols, tds }
}