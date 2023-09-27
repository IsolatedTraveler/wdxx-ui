import { dealData, his, setServer } from '../base'
import { getServerUrl } from './local'
let server: any, servering: Promise<any>
// 设置his基础服务
function setServerIng(): Promise<any> {
  return servering = getServerUrl('hisApi').then(baseURL => {
    server = setServer(baseURL, his.headers)
  })
}
// 获取his基础服务
function getServer(): Promise<any> {
  if (server) {
    return Promise.resolve()
  } else if (servering) {
    return servering
  }
  return setServerIng()
}
export function hisPost(url: string, data: any = {}, params: any = {}) {
  return getServer().then(() => {
    return server({
      method: 'post',
      url,
      data: dealData(data),
      params
    })
  })
}
export function hisGet(url: string, params: any = {}) {
  return getServer().then(() => {
    return server({ method: 'get', url, params })
  })
}