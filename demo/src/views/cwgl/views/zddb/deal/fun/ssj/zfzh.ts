import { CwglZddbLx } from "../../type";
export function setZfbZfzh(str:string) {
  if (/花呗/.test(str)) {
    return '花呗'
  } else if (/网商银行/.test(str)) {
    return '余利宝'
  } else if (/兴证全球基金管理有限公司/.test(str)) {
    return '余额宝'
  }
  return str
}
export function zfzh(data:any, drlx: CwglZddbLx) {
  if (drlx === 'zfb') {
    return setZfbZfzh(data.zfzh)
  }
  return data.zfzh
}