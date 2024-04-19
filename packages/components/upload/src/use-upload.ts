import { useCssInit } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { UploadEmits, UploadProps } from "./upload"
export const useUpload = (props: UploadProps, _emit: SetupContext<UploadEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), { _class, _style, classVal, styleVal } = useCssInit(props, 'upload', { cssClass: [], classAdd: [] })
  return {
    _ref,
    _class
  }
}