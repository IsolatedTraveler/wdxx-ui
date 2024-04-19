import { ObjAny } from "@ui/vars"
import { del, back, insert, deal, update } from '../../code'
import { magicPost } from "@/api"
interface DealSqlParam {
  sum: number
  xhcs: number
}
export interface TCol {
  col: string
  lx: string
  bz?: string
}
export interface ColLx {
  [key: string]: Array<string>
}
export type SqlLx = 'oracle' | 'def'
export interface TableCol {
  col: string
  lx: SqlLx
}
function getColVal(type: string, v: string, sjklx: SqlLx, index: number) {
  var fun: any = deal[sjklx] || deal.def
  fun = fun[type] || fun.def
  return fun(v, index)
}
function updateSql(table: string, col: string[], it: any, sjklx: SqlLx, colObj: ObjAny, primary: Array<string>, index: number = 1): string {
  const obj: ObjAny = {}
  col = col.filter(key => {
    const v = getColVal(colObj[key], it[key], sjklx, index)
    if (v) {
      return obj[key] = v
    }
  })
  if (col.length) {
    return [
      (update[sjklx] || update.def)(table, obj, it, primary, colObj, index),
      updateSql(table, col, it, sjklx, colObj, primary, index + 1)
    ].filter(it => it).join('\n')
  } else {
    return ''
  }
}
// 每次查询条数
const conut = 5
  // 需要特殊处理(字段超长需要更新)的字段类型
  , updateCol = ['CLOB']
function dealSql(table: string, data: Array<any>, colObj: ObjAny, sjklx: SqlLx, colKey: Array<string>, colLx: ColLx, primary: Array<string>) {
  const col: string[] = []
  updateCol.forEach(lx => {
    col.push(...(colLx[lx] || []))
  })
  return data.map((it) => {
    return [
      (insert[sjklx] || insert.def)(table, colKey, it, colObj),
      updateSql(table, col, it, sjklx, colObj, primary)
    ].filter(it => it).join('\n')
  }).join('\n')
}
function getCode(tj: string, bm: string, fwq: string, page: number, size = 10, param: DealSqlParam) {
  return magicPost(fwq + '/magic/jcgl/other/export', { tj, bm, page, size }).then(({ data: { total, list } }) => {
    if (param.sum == 0) {
      param.sum = Math.ceil(total / size)
      param.xhcs = Math.ceil(param.sum / conut)
    }
    return list || []
  })
}
function getRollCode(tj: string, bm: string, fwq: string, res: Array<any>, size: number, param: DealSqlParam, cs: number = 1, start: number = 2): Promise<any> {
  var end = cs * conut
  end = end > param.sum ? param.sum : end
  const arr = []
  for (; start <= end; start++) {
    arr.push(getCode(tj, bm, fwq, start, size, param).then((list) => res.push(...list)))
  }
  return Promise.all(arr).then(() => {
    if (cs <= param.xhcs) {
      return getRollCode(tj, bm, fwq, res, size, param, cs + 1, start)
    }
  })
}
export function getCodes(tj: string, bm: string, fwq: string = '', page = 1, size = 10): Promise<Array<ObjAny>> {
  var param = { sum: 0, xhcs: 0 }
  return getCode(tj, bm, fwq, page, size, param).then((res) => {
    return getRollCode(tj, bm, fwq, res, size, param).then(() => res)
  })
}
export function dealSqlData(res: Array<ObjAny>, col: Array<TCol>, bm: string, tj: string, primary: Array<string>, backTable: string = '', lx: SqlLx = 'oracle') {
  const colObj: ObjAny = {}, colLx: ColLx = {}, colKey = col.map(it => {
    const key = it.col, lxArr = colLx[it.lx]
    colObj[key] = it.lx
    if (lxArr) {
      lxArr.push(key)
    } else {
      colLx[it.lx] = [key]
    }
    return key
  }), b: string = backTable ? (back[lx] || back.def)(backTable, bm, tj, primary, colKey) : ''
    , d: string = (del[lx] || del.def)(bm, tj)
  return { i: dealSql(bm, res, colObj, lx, colKey, colLx, primary), b, d }
}