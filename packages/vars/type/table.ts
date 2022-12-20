import { ObjAny } from "./base"

export interface ThCol {
  id: string
  show: Boolean
  style: ObjAny
  posStyle: ObjAny
}
export interface TdObj extends ThCol {
  body: any
  name: string | undefined
  initStyle: (tr: HTMLElement) => void
}
export interface ThObj extends ThCol {
  colspan: number
  rowspan: number
  label: string | number | undefined
}