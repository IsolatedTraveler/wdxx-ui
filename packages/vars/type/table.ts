import { ObjAny } from "./base"
export declare type ThType = 'check' | 'radio' | ''
export interface ThCol {
  id: string
  show: Boolean
  style: ObjAny
  posStyle: ObjAny
  selfStyle: ObjAny
  class: any
  type: ThType
  selfClass?: ObjAny
}
export interface TdObj extends ThCol {
  body: any
  name: string | undefined
}
export interface ThObj extends ThCol {
  colspan: number
  rowspan: number
  label: string | number | undefined
  initStyle: (tr: HTMLElement) => void,
  thStyle: ObjAny
}