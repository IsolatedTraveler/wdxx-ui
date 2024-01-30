import * as evneted from "./evnet"
import { event, config } from "./var"
const eventFun = evneted[event]
export function setFontSize(size: any, fontBaseSize: number = 12) {
  config.size = size
  config.fontBaseSize = fontBaseSize
  config.judge = true
  window.removeEventListener(event, eventFun, false)
  window.addEventListener(event, eventFun, false)
  setTimeout(() => {
    config.judge && eventFun()
  }, 1);
}