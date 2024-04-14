import { ObjAny } from "./base"
export declare type ThType = 'check' | 'radio' | 'temp' | ''
type ThColFixed = 'left' | 'right' | boolean
export declare type ThColFixedV = 'left' | 'right'
export interface SelfThCol {
  id: string
  title: string
  show: Boolean
  style: ObjAny
  posStyle: ObjAny
  selfStyle: ObjAny
  class: any
  type: ThType
  child?: Array<ThCol>
  fixed?: ThColFixed
  width?: any,
  minWidth?: any
  ceilStyle?: any // 作用于th,td
  thStyle?: any
  tdStyle?: any
}
export interface ThCol extends SelfThCol {
  _childLen: number
  _colClass?: any // 作用于th,td
  _thStyle?: any
  _tdStyle?: any
  _thTdStyle?: any
  _maxRowLen: number
  _rowspan: number
  _colspan: number
}