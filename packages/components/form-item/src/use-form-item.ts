import { useCssInit, useFlexMixins, useProvideFormItem } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { FormItemEmits, FormItemProps } from "./form-item"
export const useFormItem = (props: FormItemProps, emit: SetupContext<FormItemEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  const { _class, _style, classVal, styleVal, judgeObjClassName } = useCssInit(props, 'form-item')
  useFlexMixins(props, classVal, styleVal, _ref, judgeObjClassName)
  useProvideFormItem(props, emit)
  return {
    _ref,
    _class,
    _style
  }
}