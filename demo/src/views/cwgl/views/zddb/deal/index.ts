import * as obj from "./mb_data";
import * as fun from "./fun";
import { CwglZddbLx } from "./type";
export const colsObj = obj
function dealData(data: any, drlx: CwglZddbLx, dclx: CwglZddbLx) {
  const dcObj = obj[dclx], fun1 = (fun as any)[dclx]
  for (let { id } of dcObj) {
    if (fun1 && fun1[id]) {
      data[id] = fun1[id](data, drlx)
    }
  }
  return data
}
export function deal(data: string[][], drlx: CwglZddbLx, dclx: CwglZddbLx) {
  const lyObj = obj[drlx], arr: any[] = []
  for (let it of data) {
    const v: any = {}
    for (let { id, title, index } of lyObj) {
      v[id] = title == it[index] ? '' : it[index]
    }
    if ((fun as any)[drlx].filter(v)) {
      arr.push(dealData(v, drlx, dclx))
    }
  }
  return arr
}