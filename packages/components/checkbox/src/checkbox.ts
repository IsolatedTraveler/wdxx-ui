export type CheckboxValueType = string | number | boolean
export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  label: {
    type: [String, Boolean, Number, Object],
  },
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: undefined,
  },
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  // border: useBorderProp,
  // size: useSizeProp
}