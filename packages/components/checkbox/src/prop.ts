import { useBorderProp, useRuleProp, useSizeProp } from "@ui/hooks"

export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean]
  },
  name: {
    type: String,
    default: undefined,
  },
  rule: useRuleProp,
  disabled: Boolean,
  label: {
    type: [String, Boolean, Number, Object],
  },
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  border: useBorderProp,
  size: useSizeProp
}
export default checkboxProps