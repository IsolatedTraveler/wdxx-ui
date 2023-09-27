import * as evneted from "./evnet"
import { event, config } from "./var"

export function setFontSize(size: any, fontBaseSize?: number) {
  config.size = size
  config.fontBaseSize = fontBaseSize
  config.judge = true
  window.removeEventListener(event, evneted[event], false)
  window.addEventListener(event, evneted[event], false)
  setTimeout(() => {
    config.judge && evneted[event]()
  }, 1);
}