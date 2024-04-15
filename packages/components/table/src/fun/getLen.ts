import { ThCol, ThColFixedV } from "@ui/vars";
import { uuid } from "@ui/utils"
type GetLenType = 1 | 2 | 3
export function getThMaxRow(arr: Array<ThCol>) {
  var tds: Array<ThCol> = [], type: GetLenType = 1, fixedTh: Array<ThCol> = []
    , data = arr.map(it => {
      var fixedV: ThColFixedV | undefined = it.fixed === 'right' ? 'right' : it.fixed ? 'left' : undefined
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
      if (!fixedV) {
        type = 2
      } else if (fixedV === 'right') {
        type = 3
      }
      return setItVal(it, tds, fixedTh, 0, fixedV)
    })
  return { tds, len: Math.max(...data), fixedTh }
}
function setItVal(it: ThCol, tds: Array<ThCol>, fixedTh: Array<ThCol>, row: number, fixed?: ThColFixedV) {
  var lastRowIndex = row
  it.fixed = fixed
  it.id = it.id || uuid()
  it._thTdStyle = { width: it.width, minWidth: it.minWidth }
  it._thStyle = {}
  if (it.child && it.child.length) {
    it._childLen = it.child.length
    lastRowIndex = getMaxRow(it.child, tds, fixedTh, row + 1, fixed)
  } else {
    tds.push(it)
  }
  if (fixed) {
    it._colClass = {
      'z-pos--sticky': true
    }
    if (fixed === 'left') {
      it._thTdStyle.borderLeft = 'none'
      it._colClass['z-border--right'] = true
    }
    fixedTh.push(it)
  }
  it._maxRowLen = lastRowIndex - row
  return lastRowIndex
}
function getMaxRow(arr: Array<ThCol>, tds: Array<ThCol>, fixedTh: Array<ThCol>, row: number = 0, fixed: ThColFixedV | undefined = undefined): number {
  const data = arr.map(it => {
    return setItVal(it, tds, fixedTh, row, fixed)
  })
  return Math.max(...data)
}