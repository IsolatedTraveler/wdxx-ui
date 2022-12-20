import { ObjAny } from "./base"

export interface ThCol {
  id: string
  show: Boolean
  style: ObjAny
  posStyle: ObjAny
  selfStyle: ObjAny
  class: any
  type: string | undefined
}
export interface TdObj extends ThCol {
  body: any
  name: string | undefined
}
export interface ThObj extends ThCol {
  colspan: number
  rowspan: number
  label: string | number | undefined
  initStyle: (tr: HTMLElement) => void
}