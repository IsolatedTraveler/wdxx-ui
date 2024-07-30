// 定义开发代码存储位置的代码类型
export type DeploymentSiteCode = 'sc' | 'nm' | 'yq' | 'cq'
// 分别定义不同开发代码在各地区的发版服务器代码类型，如：四川版本代码发布了驷马桥、达州、肖家河
type ScFbdq = 'smq' | 'dz' | 'xjh' | 'cs242'
type NmFbqq = 'kbs' | 'wsq' | 'dsq' | 'etkq' | 'etkqq'
type CqFbdq = 'cq' | 'cqOld'
type YqFbdq = 'yq'
type DeploymentSiteToFbdq<T extends DeploymentSiteCode> =
  T extends 'sc' ? ScFbdq :
  T extends 'nm' ? NmFbqq :
  T extends 'cq' ? CqFbdq :
  T extends 'yq' ? YqFbdq : never;
/**
 * 组织机构代码，包含了所有地区的发版服务器代码。
 */
export type InstitutionCode = ScFbdq | NmFbqq | CqFbdq | YqFbdq;
export interface FbdqObj {
  mc: string // 名称
  qh: DeploymentSiteCode // 区划
  id: DeploymentSiteToFbdq<FbdqObj["qh"]> // 发版地区
  url_ip?: string // 外网
  server_ip?: string // 服务器地址
  database_ip?: string // 数据库服务器ip地址
  database_url_ip?: string // 数据库服务器外网ip
  server_url: string[] // 服务可用ip
  login?: string  // 旧版登录地址
}
export type FbdqObjs = Record<InstitutionCode, FbdqObj>