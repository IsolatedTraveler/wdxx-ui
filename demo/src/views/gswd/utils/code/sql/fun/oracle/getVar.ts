import { TCol } from "../../../../fun";

export function getVar(data: Array<TCol>, bm: string) {
  return {
    lx: 'sql',
    code: data.map(({ col, bz = '' }) => {
      console.log(JSON.stringify(bz))
      return ` v_${col}        ${bm}.${col}%TYPE; -- ${bz.replace(/\\n/g, ' ')}`
    }).join('\n')
  }
}