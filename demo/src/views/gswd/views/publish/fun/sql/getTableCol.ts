import { magicPost } from "@/api"
import { ObjAny } from "@ui/vars"
import { TCol } from "./dealSql"
const tableCol: ObjAny = {}
function setTableCol(bm: string, fwq: string) {
  return tableCol[bm] = magicPost(fwq + '/magic/jcgl/other/s-bjg', { bm }).then(res => {
    return res.data
  })
}
export function getTableCol(table: string, fwq: string = ''): Promise<Array<TCol>> {
  if (tableCol[table]) {
    return tableCol[table]
  } else {
    return setTableCol(table, fwq)
  }
}