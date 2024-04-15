import { Base64 } from "js-base64"

export function def(v: string | number) {
  if (v) {
    if (/[']/.test(v)) {
      return `base64_de_utf8('${Base64.encode(v)}')`
    } else {
      return `'${v}'`
    }
  } else if (v === 0) {
    return 0
  } else {
    return 'null'
  }
}