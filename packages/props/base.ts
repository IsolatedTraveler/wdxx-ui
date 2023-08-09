import { isCssLength, isPositiveInteger } from "@ui/utils"
import { propsBaseRadius, propsBaseSize, propsBaseState } from "@ui/vars/props"

export const PropsBaseBoolean = {
  type: Boolean,
  default: false
}
export const PropsBaseString = {
  type: String,
  default: ''
}
export const PropsBaseStringN = {
  type: [String, Number],
  default: ''
}
export const PropsBaseObject = {
  type: Object
}
export const PropsBasePositiveInteger = {
  type: [String, Number],
  validator: isPositiveInteger
}
export const PropsBaseRadius = {
  type: String,
  values: propsBaseRadius,
  validator: isCssLength
}
export const PropsBaseSize = {
  type: String,
  values: propsBaseSize
}
export const PropsBaseState = {
  type: String,
  values: propsBaseState,
  default: ''
}
export const PropsBaseArray_Object = {
  type: Array<Object>
}