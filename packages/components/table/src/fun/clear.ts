import { ThCol } from "@ui/vars"

export function claerFixed(keys: Array<ThCol>, el: HTMLElement, ref: any) {
  el.scrollLeft = 0
  el.scrollTop = 0
  keys.forEach(it => {
    if (it._thTdStyle) {
      it._thTdStyle.right = undefined
      it._thTdStyle.left = undefined
      it._thStyle.top = undefined
      it._thStyle.height = Math.ceil(ref[it.id][0].clientHeight) + 'px'
      it._thTdStyle.width = Math.ceil(ref[it.id][0].clientWidth) + 'px'
    }
  })
}