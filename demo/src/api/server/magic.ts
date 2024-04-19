import { AjaxReturn, dealData, magic, setServer } from '../base'
import { getConfig, getServerUrl } from './local'
let server: any, servering: Promise<any>, i = 0
interface MagicAjaxRes extends AjaxReturn {
  Authorization?: string
}
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
  return getConfig('magic').then(({ Authorization, user, jqurl = magic.jqurl }) => {
    magic.headers.Authorization = Authorization
    return magicPost(jqurl, {}, user).then(res => {
      magic.headers.Authorization = res.Authorization
      i = 0
    }).catch(() => {
      return { Authorization: '' }
    })
  })
}
export function magicPost(url: string, data: any = {}, params: any = {}, headers = {}): Promise<MagicAjaxRes> {
  return getServer().then(() => {
    return server({
      method: 'post',
      url,
      headers,
      data: { data: dealData(data) },
      params
    }).catch((res: any) => {
      if (res.code === 0 && i < 3) {
        i++
        server = null
        return magicPost(url, data, params, headers)
      } else {
        return Promise.reject(res)
      }
    })
  })
}
export function magicGet(url: string, params: any = {}) {
  return getServer().then(() => {
    return server({ method: 'get', url, params })
  })
}