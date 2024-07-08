import { CwglZddbLx } from "../../type";
import { setZfbZfzh, setWxZfzh } from "./zfzh";

export function sale_info(data: any, drlx: CwglZddbLx, ly: string) {
  if (data.jylx === '支出' || data.jylx === '收入') {
    return ''
  }
  if (drlx === 'zfb') {
    return setZfbZfzh(data.sale_info, ly)
  } else if (drlx === 'wx') {
    return setWxZfzh(data.sale_info, ly)
  }
  return data.sale_info ? (data.sale_info + ly) : data.sale_info
}