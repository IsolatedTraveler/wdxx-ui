import { Base64 } from "js-base64"

export function def(v: string) {
  if (v) {
    if (/[']/.test(v)) {
      return `base64_de_utf8('${Base64.encode(v)}')`
    } else {
      return `'${v}'`
    }
  } else {
    return 'null'
  }
}