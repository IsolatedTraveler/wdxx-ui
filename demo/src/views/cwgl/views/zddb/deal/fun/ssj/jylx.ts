import { CwglZddbLx } from "../../type";

export function jylx(data: any, drlx: CwglZddbLx) {
  if (drlx === 'zfb') {
    if (data.jylx === '不计收支') {
      return '转账'
    }
  } else if (drlx === 'wx') {
    if (data.jylx === '/') {
      return '转账'
    } else if (data.spms == '转账备注:微信转账' && data.sale_info == '狗狗') {
      return '转账'
    }
  }
  return data.jylx
}