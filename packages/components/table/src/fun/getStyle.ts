import { ThCol } from "@ui/vars";

export interface JudgeExeSuccBack {
  ref: any
  el: HTMLElement
  keys: Array<ThCol>
}
export function getStyle({ ref, el, keys }: JudgeExeSuccBack): HTMLElement {
  const tableRect = el.getBoundingClientRect();
  keys.forEach((it, i) => {
    const id = it.id, fixed = it.fixed
    if (fixed) {
      const el: HTMLTableCellElement = (ref[id] as Array<HTMLTableCellElement>)?.[0],
        thRect = el.getBoundingClientRect()
      it._thStyle.top = (thRect.top - tableRect.top) + 'px'
      if (fixed === 'left') {
        it._thTdStyle.left = (thRect.left - tableRect.left) + 'px'
      } else {
        it._thTdStyle.right = (tableRect.right - thRect.right) + 'px'
      }
    }
  })
  return el
}