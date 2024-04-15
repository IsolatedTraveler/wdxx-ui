import { ObjAny, ThCol } from "@ui/vars"
import { getThMaxRow } from "./getLen"

function setCols(arr: Array<ThCol>, thLen: number, cols: Array<Array<ThCol>> = [], row: number = 0) {
  const data: Array<ThCol> = cols[row] = cols[row] || [], keys: Array<ObjAny> = []
  let childLen = 0, firstColRowSpan = 0
  console.log('headLen:', thLen + 1)
  arr.forEach((it, i) => {
    data.push(it)
    console.log(it.title, it._maxRowLen)
    const jtSite = thLen - it._maxRowLen + 1
    it._rowspan = jtSite - row
    if (it._childLen) {
      const v = setCols(it.child || [], thLen, cols, jtSite)
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
  return { childLen, keys, cols }
}
export function getCols(arr: Array<ThCol>) {
  arr = JSON.parse(JSON.stringify(arr))
  const { tds, len } = getThMaxRow(arr)
  const { cols } = setCols(arr, len)
  return { cols, tds }
}