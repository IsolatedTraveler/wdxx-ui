function getChar() {
  const r = Math.random() * 36 | 0
  if (r > 9) {
    return String.fromCharCode(55 + r)
  }
  return r.toString()
}
export function uuid(jgf = '-', max = 32) {
  var v = Date.now().toString(36).toUpperCase()
  var num = (max - v.length) / (4 + jgf.length) | 0
  for (let i = 0; i < num; i++)
    v += jgf + getChar() + getChar() + getChar() + getChar()
  num = max - v.length
  if (num > 1) {
    v += jgf
    for (let i = 1; i < num; i++)
      v += getChar()
  }
  return v
}