import { useCssInit, useProvideBtnGroup, useFlexMixins } from "@ui/hooks"
import { ref } from "vue"
import { BtnGroupProps } from "./btn-group"
export const useBtnGroup = (props: BtnGroupProps) => {
  const _ref = ref<HTMLButtonElement>(), { _class, classVal, styleVal } = useCssInit(props, 'btn-group')
  useProvideBtnGroup(props)
  useFlexMixins(props, classVal, styleVal, _ref)
  return {
    _ref,
    _class
  }
}