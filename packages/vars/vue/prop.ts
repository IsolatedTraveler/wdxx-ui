export interface Prop {
  key?: string
  type?: any
  values?: Array<any>
  required?: boolean
  validator?: any
  default?: any
}
export const ComponentSize = ['', 'sm', 'md', 'lg']