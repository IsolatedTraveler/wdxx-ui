import { ComponentColAlign, ComponentFlex, ComponentRowAlign, ComponentSelfAlign } from "../vue"

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
export type ComponentFlexT = typeof ComponentFlex
export type ComponentRowAlignT = typeof ComponentRowAlign
export type ComponentColAlignT = typeof ComponentColAlign
export type ComponentSelfAlignT = typeof ComponentSelfAlign