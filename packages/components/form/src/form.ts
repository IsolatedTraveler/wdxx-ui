import { useColAlginProp, useFlexProp, useNumberBuildProp, useRowAlginProp, useSizeProp } from "@ui/hooks";
import { ExtractPropTypes, PropType } from "vue";
export const formProps = {
  disabled: Boolean as PropType<boolean>,
  modelValue: Object as Record<string, any>,
  flex: {...useFlexProp, default: 'row'},
  rowAlign: {...useRowAlginProp, default: 'start'},
  colAlign: {...useColAlginProp, default: 'center'},
  labelWorld: useNumberBuildProp('label-world', 4),
  rules: '',
  size: useSizeProp
}
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits