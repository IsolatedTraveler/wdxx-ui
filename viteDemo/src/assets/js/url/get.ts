import { jsUrlSplit } from "../var"

let jsUrl: string
export function getJsUrl() {
  if (!jsUrl) {
    let elem: HTMLScriptElement = document.currentScript as HTMLScriptElement
    if (!elem) {
      elem = document.scripts[0]
    }
    jsUrl = new URL(elem.src.split(jsUrlSplit)[0]).pathname
  }
  return jsUrl
}