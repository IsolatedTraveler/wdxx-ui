import { CwglZddbLx } from "../../type"

export function bz(data: any, drlx: CwglZddbLx) {
  if (drlx === 'zfb' || drlx == 'wx') {
    return data.bz || data.spms
  }
  return data.bz
}