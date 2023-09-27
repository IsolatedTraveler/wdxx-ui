import axios from 'axios'
import { configUrl, host } from '../base/var'
let config: any
export function localGet(url: string, data = {}): Promise<any> {
  return axios.get(url, { params: { version: new Date().getTime(), ...data } }).then(response => {
    return response.data
  })
}
function getConfigV(name): any {
  return name ? config[name] : config
}
export function getConfig(name?: string): Promise<any> {
  if (config) {
    return Promise.resolve(getConfigV(name))
  } else {
    return localGet(configUrl).then((res) => {
      config = res
      return getConfigV(name)
    })
  }
}
export function syncGetConfig(name?: string): any {
  return name ? config?.[name] : config
}
export function dealUrl(arr: any = '', def: string = ''): string {
  arr = arr.servers || arr
  if (typeof arr === 'object') {
    return arr.filter((it: string) => it.indexOf(host) != -1)[0] || arr[0] || def
  }
  return arr || def
}
export function getServerUrl(id = 'baseUrl'): Promise<string> {
  return getConfig().then((res) => {
    return dealUrl(res[id], res.defaultUrl).trim()
  })
}
export function setConfig(data) {
  config = data
}