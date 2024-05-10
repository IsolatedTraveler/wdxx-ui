import { ObjAny } from "@ui/vars";
import { getColVal } from "../insert/oracle";
export function oracle(table: string, it: ObjAny, data: ObjAny, primary: string[], colObj: ObjAny, index: number) {
  if (index > 0) {
    return `update ${table} set ${Object.keys(it).map((key => {
      return `${key}=${key} || ${it[key]}`
    })).join(',')} where ${primary.map(key => {
      return `${key}=${getColVal(colObj[key], data[key])}`
    }).join(' AND ')};`
  } else {
    return `update ${table} set ${Object.keys(it).map((key => {
      return `${key}=${it[key]}`
    })).join(',')} where ${primary.map(key => {
      return `${key}=${getColVal(colObj[key], data[key])}`
    }).join(' AND ')};`
  }
}