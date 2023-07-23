import axios from 'axios'
import { getConfig, getServerUrl } from './local'
let baseServer:any, Authorization:string
function getServer():Promise<any> {
  if(baseServer) {
    return Promise.resolve()
  }
  return getServerUrl('RTCUrl').then((baseURL) => {
    baseServer=axios.create({baseURL})
    baseServer.interceptors.request.use((config:any)=>{
      config.headers = Object.assign({
        Authorization,
        contentType: 'application/json;charset=utf-8'
      }, config.headers)
      return config
    })
    baseServer.interceptors.response.use(
      (res:any) => res.data,
      ({response:res}:{response:any}) => res.data
    )
    return getAuthorization()
  })
}
function getAuthorization() {
  return getConfig('magic').then(({token, zhxx}) => {
    Authorization = token
    return post('/oauth/token',{}, zhxx).then(res => {
      Authorization = res.Authorization
    })
  })
}
export function post(url:string,data:any = {}, params:any = {}) {
  return getServer().then(() => {
    return baseServer({
      method: 'post',
      url,
      data,
      params
    })
  })
}
export function get() {

}