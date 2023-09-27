import { isCssLength, isPositiveInteger } from "@ui/utils"
import { ObjAny } from "@ui/vars"
import { propsBaseRadius, propsBaseSize, propsBaseState } from "@ui/vars/props"

export const PropsBaseBoolean = {
  type: Boolean,
  default: false
}
export const PropsBaseString = {
  type: String,
  default: ''
}
export const PropsBaseNum = {
  type: Number,
  default: ''
}
export const PropsBaseNumR = {
  type: Number,
  required: true,
  default: 0
}
export const PropsBaseStringN = {
  type: [String, Number],
  default: ''
}
export const PropsBaseStringNR = {
  type: [String, Number],
  required: true,
  default: ''
}
export const PropsBaseObject = {
  type: Object
}
export const PropsBaseObjectR = {
  type: Object,
  required: true,
  default: {}
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
  type: Array<ObjAny>
}
export const PropsBaseArrayStringN = {
  type: Array<string | number>
}