import { TCol } from "../../../../fun";

export function setSelectVar(data: Array<TCol>, bm: string) {
  return {
    lx: 'sql',
    code: `select ${data.map(it => it.col).join(', ')} into ${data.map(it => 'v_' + it.col).join(', ')} from ${bm} where `
  }
}