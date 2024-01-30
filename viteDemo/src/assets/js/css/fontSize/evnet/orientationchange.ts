import { config } from "../var";
import { calc } from "./common";

export function orientationchange() {
  const meta: HTMLMetaElement = document.getElementsByName('viewport')[0] as HTMLMetaElement
  if (meta) {
    meta.content = 'width=device-width,initial-scale=1.0'
  }
  if (calc()) {
    setFont()
  }
}

function setFont() {
  const { yqWidth, zsWidth, fontBaseSize, llqWidth } = config
  let scale = zsWidth / yqWidth, meta: HTMLMetaElement = document.getElementsByName('viewport')[0] as HTMLMetaElement
  if (meta) {
    document.body.style.width = zsWidth + 'px'
    meta.content = `width=${yqWidth / zsWidth * llqWidth},initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale},user-scalable=0`
  }
  if (fontBaseSize) {
    document.body.style.fontSize = (fontBaseSize / 100) + 'rem'
  }
}