import { isPositiveInteger } from "@ui/utils"

export const PropsBaseDisabled = {
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