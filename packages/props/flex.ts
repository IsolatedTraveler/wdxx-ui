import { propsFlex, propsFlexAlign, propsFlexJustify, propsFlexSelf } from '@ui/vars/props'
export const PropsFlex = {
  type: [String, Boolean],
  values: propsFlex
}
export const PropsFlexJustify = {
  type: String,
  values: propsFlexJustify
}
export const PropsFlexAlign = {
  type: String,
  values: propsFlexAlign
}
export const PropsFlexSelf = {
  type: String,
  values: propsFlexSelf
}
export const PropsFlexBase = {
  type: [String, Number],
  validator: (v: any): string | undefined => {
    if (v < 1 || v > 100) {
      return 'greater than 1 and less than 100'
    }
  }
}