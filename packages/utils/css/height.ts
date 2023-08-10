import { CSSProperties, Ref } from "vue"
export interface SetHeightByWidthVariable {
  maxWidth: number
  marginLeft?: number
  marginRight?: number
}
export function setHeightByWidth(
  width: number | undefined,
  style: CSSProperties,
  refEl: Ref<Element | undefined> | { value: Element },
  calc: number,
  variable: SetHeightByWidthVariable) {
  return new Promise((resolve, reject) => {
    if (refEl.value) {
      const el = refEl.value
      if (width) {
        var elWidth = el.clientWidth
        if (!variable.maxWidth) {
          var obj = getComputedStyle(el)
          variable.maxWidth = parseFloat(obj.maxWidth)
          variable.marginLeft = parseFloat(obj.marginLeft)
          variable.marginRight = parseFloat(obj.marginRight)
        }
        const { maxWidth, marginLeft = 0, marginRight = 0 } = variable
        if (width > maxWidth) {
          elWidth = (width / Math.ceil(width / maxWidth)) - marginLeft - marginRight - 1
          style.width = (elWidth / 100) + 'rem'
        }
        style.height = (calc * elWidth / 100) + 'rem'
      } else {
        style.width = undefined
        style.height = undefined
      }
    } else {
      // nextTick(() => setHeightByWidth(width, style, refEl, calc, variable))
    }
  })
}