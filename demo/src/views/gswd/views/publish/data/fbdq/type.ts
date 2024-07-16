export interface FbdqObj {
  mc: string // 名称
  qh: string // 区划
  id: string // 发版地区
  url_ip?: string // 外网
  server_ip?: string // 服务器地址
  database_ip?: string // 数据库服务器ip地址
  database_url_ip?: string // 数据库服务器外网ip
  server_url: string[] // 服务可用ip

}
export interface FbdqObjs {
  [k: string]: FbdqObj
}