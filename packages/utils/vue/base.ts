import { ObjStrBool } from "@ui/vars"

const uuids: ObjStrBool = {}
export const uuid = (a = 'yxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'): string => {
  const v: string = a.replace(/[xy]/g, function (c) {
    const r = Math.random() * 36 | 0
    if (r > 9) {
      return String.fromCharCode(55 + r)
    } else if (c != 'x') {
      return String.fromCharCode(65 + r)
    }
    return r.toString()
  })
  if (uuids[v]) {
    return uuid(a)
  }
  uuids[v] = true
  return v
}