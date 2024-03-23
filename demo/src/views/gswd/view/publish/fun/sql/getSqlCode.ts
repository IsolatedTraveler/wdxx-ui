import { getTableCol } from "./getTableCol"
import { dealSqlData, getCodes, TableCol } from "./dealSql"

interface Sql {
  i: string
  d: string
  b: string
}
export function getSqlCode(bm: string, tj: string, primary: Array<string>, backTable: string = '', lx: string = 'oracle'): Promise<Sql> {
  return getTableCol(bm).then((col: Array<TableCol>) => {
    return getCodes(tj, bm).then(res => {
      return dealSqlData(res, col, bm, tj, primary, backTable, lx)
    })
  })
}