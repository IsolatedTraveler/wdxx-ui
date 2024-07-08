import { CwglZddbLx } from "../../type"

function setZfzh(str: string, ly: string) {
  if (/工商银行储蓄卡\(9331\)/.test(str)) {
    return '中国工商银行' + ly
  } else if (/中信银行信用卡\(0338\)/.test(str)) {
    return '中信' + ly
  } else if (/成都银行储蓄卡\(4237\)/.test(str)) {
    return '成都银行' + ly
  } else if (/交通银行储蓄卡\(4237\)/.test(str)) {
    return '中国交通银行' + ly
  }
  return str
}
export function setZfbZfzh(str: string, ly: string) {
  if (/花呗/.test(str)) {
    return '花呗' + ly
  } else if (/网商银行/.test(str)) {
    return '余利宝' + ly
  } else if (/兴证全球基金管理有限公司/.test(str)) {
    return '余额宝' + ly
  }
  return setZfzh(str, ly)
}
export function setWxZfzh(str: string, ly: string) {
  if (str == '/') {
    return '微信钱包' + ly
  } else if (str == '零钱') {
    return '微信钱包' + ly
  } else if (str == '零钱通') {
    return '微信钱包' + ly
  }
  return setZfzh(str, ly)
}
export function zfzh(data: any, drlx: CwglZddbLx, ly: string) {
  if (drlx === 'zfb') {
    var mc = setZfbZfzh(data.zfzh, ly)
    if (data.jylx == '收入' && !mc) {
      return '余额宝' + ly
    }
    return mc
  } else if (drlx === 'wx') {
    var mc = setWxZfzh(data.zfzh, ly)
    if (data.jylx == '收入' && !mc) {
      return '微信钱包' + ly
    }
    return mc
  }
  return data.zfzh ? (data.zfzh + ly) : ''
}