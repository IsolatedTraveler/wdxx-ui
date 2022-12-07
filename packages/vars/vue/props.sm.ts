import {ComponentRowAlign, ComponentBtnShape, ComponentBtnType, ComponentFlex, ComponentRadius, ComponentSize, ComponentState} from './prop'
export interface propAll {
  // 基础
  radius?: typeof ComponentRadius
  shape?: typeof ComponentBtnShape | string
  size?: typeof ComponentSize
  state?: typeof ComponentState
  data?: Array<any>
  // flex
  flex?: typeof ComponentFlex
  rowAlign?: typeof ComponentRowAlign
  // form
  disabled?: Boolean
  modelValue?: any
  placeholder?: String
  // btn
  type?: typeof ComponentBtnType
  // select
  date?: Object
  search?: [Boolean, Function]
  table?: Object
  multi?: Boolean

}