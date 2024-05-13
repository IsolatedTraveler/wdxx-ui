import { CwglZddbLx } from "../../type";

export function xm(data:any, drlx: CwglZddbLx) {
  if (drlx === 'zfb') {
    if (data.jylx === '转账') {
      return '转账'
    }
    return '日常'
  }
}