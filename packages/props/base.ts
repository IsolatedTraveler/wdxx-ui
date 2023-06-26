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
export const PropsBasePositiveInteger = {
  type: [String, Number],
  validator: isPositiveInteger
}
export const PropsBaseRadius = {
  type: [String, Number],
  values: propsBaseRadius,
  validator: isCssLength
}
export const PropsBaseSize = {
  type: [String, Number],
  values: propsBaseSize
}
export const PropsBaseState = {
  type: [String, Number],
  values: propsBaseState
}