import { magicPost } from "@/api"
import { ObjAny } from "@ui/vars"
const tableCol:ObjAny = {}
function setTableCol(table:string) {
  return tableCol[table] = magicPost('', {table}).then(res=> {
    return res.data.map((it:any) => it.id)
  })
}
export function getTableCol(table:string) {
  if (tableCol[table]) {
    return  tableCol[table]
  } else {
    return setTableCol(table)
  }
}