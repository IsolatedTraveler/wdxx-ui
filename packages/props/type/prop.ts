export interface Prop {
  type?: any
  required?: boolean
  validator?: Function
  default?: any
}
export interface PropV extends Prop {
  values?: Array<any>
}