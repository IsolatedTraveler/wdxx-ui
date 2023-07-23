import axios from 'axios'
let config:any
const host = location.host
export function localGet(url:string, data = {}) {
  return axios.get(url, {params: {version: new Date().getTime(), ...data}}).then(response => {
    return response.data
  })
}
export function getConfig(name?:string) {
  if (config) {
    return Promise.resolve(name ? config[name] : config)
  } else {
    return localGet('config/server.json').then((res)=>{
      config = res
      return name ? config[name] : config
    })
  }
}
export function getServerUrl(id = 'baseUrl'):Promise<string> {
  return getConfig().then((res)=>{
    let urls = res[id] || res.baseUrl || ''
    if (typeof urls === 'object') {
      urls = urls.filter((it:string) => it.indexOf(host) != -1)[0] || urls[0]
    }
    return urls.trim()
  })
}