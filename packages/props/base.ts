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
  type: [Number, String],
  default: '',
  validator: (v: any): string | undefined => {
    if (v && !isNaN(v)) {
      return 'only numbers can be entered'
    }
  }
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
  type: Object,
  default: null
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
  type: [String, Number],
  values: propsBaseRadius,
  validator: isCssLength
}
export const PropsBasePx = {
  type: [String, Number],
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
  type: Array<ObjAny>,
  default: []
}
export const PropsBaseArrayStringN = {
  type: Array<string | number>
}