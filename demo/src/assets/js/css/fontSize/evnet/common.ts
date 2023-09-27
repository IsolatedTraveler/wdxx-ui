import { config } from "../var"

export function calc(): boolean {
  var { llqWidth, yqWidth, zsWidth, size } = config
  const width = document.documentElement.clientWidth
  if (llqWidth != width) {
    llqWidth = width
    yqWidth = size
    zsWidth = width
    if (typeof size === 'object') {
      var { min, max, def } = size
      if (min && max) {
        yqWidth = def || (min + max) / 2
        if (width > max) {
          zsWidth = max
        } else if (width < min) {
          zsWidth = min
          yqWidth = min
        }
      }
      yqWidth = def || min || max
    }
    if (yqWidth && config.zsWidth != zsWidth) {
      config.yqWidth = yqWidth
      config.zsWidth = zsWidth
      config.llqWidth = llqWidth
      return true
    }
  }
}