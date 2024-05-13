export function filter(v: any) {
  if (!v.je) return false
  if (v.zt === '交易关闭') return false
  if (v.jylx === '不计收支' && !v.zfzh) return false
  return true
}