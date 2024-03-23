import { ObjAny } from "@ui/vars"
import * as back from './back'
import * as del from './delete'
import * as deal from './deal'
import { magicPost } from "@/api"
interface DealSqlParam {
  sum: number
  xhcs: number
}
export interface TableCol {
  col: string
  lx: string
}
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
function getCode(tj: string, bm: string, page: number, size = 10, param: DealSqlParam) {
  return magicPost('/magic/jcgl/other/export', { tj, bm, page, size }).then(({ data: { total, list } }) => {
    if (param.sum == 0) {
      param.sum = Math.ceil(total / size)
      param.xhcs = Math.ceil(param.sum / conut)
    }
    return list || []
  })
}
function getRollCode(tj: string, bm: string, res: Array<any>, size: number, param: DealSqlParam, cs: number = 1, start: number = 2): Promise<any> {
  var end = cs * conut
  end = end > param.sum ? param.sum : end
  const arr = []
  for (; start <= end; start++) {
    arr.push(getCode(tj, bm, start, size, param).then((list) => res.push(...list)))
  }
  return Promise.all(arr).then(() => {
    if (cs <= param.xhcs) {
      return getRollCode(tj, bm, res, size, param, cs + 1, start)
    }
  })
}
export function getCodes(tj: string, bm: string, page = 1, size = 10): Promise<Array<ObjAny>> {
  var param = { sum: 0, xhcs: 0 }
  return getCode(tj, bm, page, size, param).then((res) => {
    return getRollCode(tj, bm, res, size, param).then(() => res)
  })
}
export function dealSqlData(res: Array<ObjAny>, col: Array<TableCol>, bm: string, tj: string, primary: Array<string>, backTable: string = '', lx: string = 'oracle') {
  const colObj: ObjAny = {}, colKey = col.map(it => {
    const key = it.col
    colObj[key] = it.lx
    return key
  }), b: string = backTable ? ((back as ObjAny)[lx] || (back as ObjAny).def)(backTable, bm, tj, primary, colKey) : ''
    , d: string = ((del as ObjAny)[lx] || (del as ObjAny).def)(bm, tj)
  return { i: dealSql(bm, res, colObj, lx, colKey), b, d }
}