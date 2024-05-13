import { CwglZddbLx } from "../../type";
import { setZfbZfzh } from "./zfzh";

export function sale_info(data: any, drlx: CwglZddbLx) {
  if (data.jylx === '支出' || data.jylx === '收入') {
    return ''
  }
  if (drlx === 'zfb') {
    return setZfbZfzh(data.sale_info)
  }
  return data.sale_info
}