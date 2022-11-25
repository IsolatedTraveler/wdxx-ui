export interface Prop {
  key?: string
  type?: any
  values?: Array<any>
  required?: boolean
  validator?: any
  default?: any
}
export const ComponentAlign = ['', 'evenly', 'start', 'end', 'center', 'around', 'between', 'stretch']
export const ComponentFlex = ['', 'row', 'col', true, false]
export const ComponentRadius = ['', 'circle', 'round', 'ellipse']
export const ComponentSize = ['', 'sm', 'md', 'lg']
export const ComponentState = ['', 'primary', 'success', 'warning', 'danger', 'info']

// btn
export const ComponentBtnType = ['', 'submit', 'button', 'reset']
export const ComponentBtnShape = ['', 'ghost', 'text']