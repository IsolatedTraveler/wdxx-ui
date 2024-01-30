import { config } from "../var";
import { calc } from "./common";

export function resize() {
  if (calc()) {
    setFont()
  }
}
function setFont() {
  const { yqWidth, zsWidth, fontBaseSize } = config
  let scale = zsWidth / yqWidth
  document.documentElement.style.fontSize = (scale * 100) + 'px'
  document.body.style.width = zsWidth + 'px'
  if (fontBaseSize) {
    document.body.style.fontSize = (fontBaseSize / 100) + 'rem'
  }
}