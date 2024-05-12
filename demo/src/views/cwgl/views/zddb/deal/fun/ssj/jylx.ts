import { CwglZddbLx } from "../../type";

export function jylx(data:any, drlx: CwglZddbLx) {
  if (drlx === 'zfb') {
    if (data.jylx === '不计收支') {
      return '转账'
    }
  }
  return data.jylx
}