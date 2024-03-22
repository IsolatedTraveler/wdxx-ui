// base
export const configUrl = 'config/server.json', host = location.host
export interface ServerConfig {
  headers?: any
  jqurl?: string
}
// magic
export const magic: ServerConfig = {
  headers: {
    contentType: 'application/json;charset=utf-8'
  },
  jqurl: '/magic/oauth/token'
}
// his
export const his: ServerConfig = {
  headers: {
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}
