import { CwglZddbLx } from "../../type"

export function bz(data:any, drlx: CwglZddbLx) {
  if (drlx === 'zfb') {
    return data.bz || data.spms
  }
  return data.bz
}