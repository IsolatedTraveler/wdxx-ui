import { ObjAny } from "@ui/vars"
import { oracle as deal } from '../deal/oracle'
import { DealType } from "../deal/type"
export function getColVal(type: DealType, v: string) {
  var fun: any = deal[type] || deal.def
  return fun(v)
}
export function oracle(table: string, colKey: Array<string>, it: any, colObj: ObjAny) {
  return `insert into ${table} (${colKey.join(', ')}) values (${colKey.map(key => {
    return getColVal(colObj[key], it[key])
  }).join(', ')});`
}