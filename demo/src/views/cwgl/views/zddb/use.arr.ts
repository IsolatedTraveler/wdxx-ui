/**
 * @description 财务数据来源
 *
 * @enum
 *
 * - zfb: 支付宝
 * - wx: 微信
 * - ssj: 随手记
*/
export type CwglZddbLx = 'zfb' | 'wx' | 'ssj'
interface CwglZddbItem {
  id: CwglZddbLx
  mc:string
}
export const mb:CwglZddbItem[] = [
  {id: 'zfb', mc: '支付宝'},
  {id: 'ssj', mc: '随手记'}
]
export const glArr:any ={
  jylx: [{id: '', mc: '请选择'},{id: '收入', mc: '收入'},{id: '支出', mc: '支出'},{id: '转账', mc: '转账'}]
}