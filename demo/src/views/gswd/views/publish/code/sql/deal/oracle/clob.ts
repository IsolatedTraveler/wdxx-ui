import { Base64 } from "js-base64"
const max = 1250
export function CLOB(v: string, i: number = 0) {
  if (v) {
    const start = max * i
    v = v.substring(start, start + max)
    if (v) {
      return `base64_de_utf8('${Base64.encode(v)}')`
    }
  }
  return ''
}