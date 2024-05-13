import { CwglZddbLx } from "../../type";
export function setZfbZfzh(str: string) {
  if (/花呗/.test(str)) {
    return '花呗'
  } else if (/网商银行/.test(str)) {
    return '余利宝'
  } else if (/兴证全球基金管理有限公司/.test(str)) {
    return '余额宝'
  } else if (/工商银行储蓄卡\(9331\)/.test(str)) {
    return '中国工商银行'
  } else if (/中信银行信用卡\(0338\)/.test(str)) {
    return '中信'
  } else if (/成都银行储蓄卡\(4237\)/.test(str)) {
    return '成都银行'
  }
  return str
}
export function zfzh(data: any, drlx: CwglZddbLx) {
  data.zfzh == '花呗&红包' && console.log(data.zfzh)
  if (drlx === 'zfb') {
    data.zfzh == '花呗&红包' && console.log(data.zfzh, 1)
    var mc = setZfbZfzh(data.zfzh)
    if (data.jylx == '收入' && !mc) {
      return '余额宝'
    }
    return mc
  }
  return data.zfzh
}