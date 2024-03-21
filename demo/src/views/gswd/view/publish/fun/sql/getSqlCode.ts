import { magicPost } from "@/api"
import { getTableCol } from "./getTableCol"
import * as back from './back'
import * as del from './delete'
import * as deal from './deal'
console.log(back)
console.log( del)
console.log( deal)
import { ObjAny } from "@ui/vars"
interface TableCol {
  col:string
  lx:string
}
function dealSql(data: Array<any>, colObj: ObjAny, lx: string, colKey:Array<string>) {
  return data.map((it) => {
    return `insert into sqldy (${colKey.join(', ')}) values (${colKey.map(key => {
      var fun:any = (deal as any)[lx] || (deal as any).def, type = colObj[key]
      fun = fun[type] || fun.def
      return fun(it[key])
    }).join(', ')});`
  }).join('\n')
}
export function getSqlCode(table: string, where: string, primary: Array<string>, backTable:string, lx: string = 'oracle'){
  return getTableCol(table).then((col: Array<TableCol>) => {
    return magicPost('', {where}).then(res => {
      const   colObj:ObjAny = {}, colKey = col.map(it => {
        const key = it.col
        colObj[key] = it.lx
        return key
      }), b = ((back as ObjAny)[lx] || (back as ObjAny).def)(backTable, table, where, primary, colKey)
      , d = ((del as ObjAny)[lx] || (del as ObjAny).def)( table, where)
      return {i:dealSql(res.data, colObj, lx, colKey),b,d}
    })
  })
}