export interface PublishCode {
  lx: string
  code: string
}
export interface Zfcs {
  name: string
  mc: string
}
export interface ZfcsObj {
  [key: string]: Array<Zfcs>
}
export interface FormData {
  wwdz?: string
  fbd?: string
  jgid?: string
  zffs: string
  yxq?: number
  APPID?: string
  MCHID?: string
  PRIVATEKEY?: string
  Appsecret?: string
}