import { magicPost } from "@/api"
import { getTableCol } from "./getTableCol"
import * as back from './back'
import * as del from './delete'
import * as deal from './deal'
import { ObjAny } from "@ui/vars"
interface TableCol {
  col: string
  lx: string
}
interface Sql {
  i: string
  d: string
  b: string
}
var sum = 0, xhcs = 0
const conut = 5
function dealSql(table: string, data: Array<any>, colObj: ObjAny, lx: string, colKey: Array<string>): string {
  return data.map((it) => {
    return `insert into ${table} (${colKey.join(', ')}) values (${colKey.map(key => {
      var fun: any = (deal as any)[lx] || (deal as any).def, type = colObj[key]
      fun = fun[type] || fun.def
      return fun(it[key])
    }).join(', ')});`
  }).join('\n')
}
function getCode(tj: string, bm: string, page: number, size = 10) {
  return magicPost('/magic/jcgl/other/export', { tj, bm, page, size }).then(({ data: { total, list } }) => {
    if (sum == 0) {
      sum = Math.ceil(total / size)
      xhcs = Math.ceil(sum / conut)
    }
    return list || []
  })
}
function getRollCode(tj: string, bm: string, res: Array<any>, size: number, cs: number = 1, start: number = 2): Promise<any> {
  var end = cs * conut
  end = end > sum ? sum : end
  const arr = []
  for (; start <= end; start++) {
    arr.push(getCode(tj, bm, start, size).then((list) => res.push(...list)))
  }
  return Promise.all(arr).then(() => {
    if (cs <= xhcs) {
      return getRollCode(tj, bm, res, size, cs + 1, start)
    }
  })
}
function getCodes(tj: string, bm: string, page = 1, size = 10) {
  sum = 0
  return getCode(tj, bm, page, size).then((res) => {
    return getRollCode(tj, bm, res, size).then(() => res)
  })
}
export function getSqlCode(bm: string, tj: string, primary: Array<string>, backTable: string = '', lx: string = 'oracle'): Promise<Sql> {
  return getTableCol(bm).then((col: Array<TableCol>) => {
    return getCodes(tj, bm).then(res => {
      const colObj: ObjAny = {}, colKey = col.map(it => {
        const key = it.col
        colObj[key] = it.lx
        return key
      }), b: string = backTable ? ((back as ObjAny)[lx] || (back as ObjAny).def)(backTable, bm, tj, primary, colKey) : ''
        , d: string = ((del as ObjAny)[lx] || (del as ObjAny).def)(bm, tj)
      return { i: dealSql(bm, res, colObj, lx, colKey), b, d }
    })

  })
}