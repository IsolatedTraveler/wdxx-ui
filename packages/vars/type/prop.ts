export interface Prop {
  key?: string
  type?: any
  values?: Array<any>
  required?: boolean
  validator?: any
  default?: any
}
export interface Rule {
  msg?: string
  reg?: RegExp
  validate?: (v: any, data?: any) => boolean | string
}