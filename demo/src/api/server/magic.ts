import { magic, setServer } from '../base'
import { getConfig, getServerUrl } from './local'
let server: any, servering: Promise<any>
// 设置magic基础服务
function setServerIng(): Promise<any> {
  return servering = getServerUrl('magicApi').then(baseURL => {
    server = setServer(baseURL, magic.headers)
    return setAuthorization()
  })
}
// 获取magic基础服务
function getServer(): Promise<any> {
  if (server) {
    return Promise.resolve()
  } else if (servering) {
    return servering
  }
  return setServerIng()
}
// magic鉴权
function setAuthorization() {
  return getConfig('magicApi').then(({ Authorization, zhxx, jqurl = magic.jqurl }) => {
    magic.headers.Authorization = Authorization
    return magicPost(jqurl, {}, zhxx).then(res => magic.headers.Authorization = res.Authorization)
  })
}
export function magicPost(url: string, data: any = {}, params: any = {}) {
  return getServer().then(() => {
    return server({
      method: 'post',
      url,
      data,
      params
    })
  })
}
export function magicGet(url: string, params: any = {}) {
  return getServer().then(() => {
    return server({ method: 'get', url, params })
  })
}