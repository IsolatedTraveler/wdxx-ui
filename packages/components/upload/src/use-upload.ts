import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { UploadEmits, UploadProps } from "./upload"
export const useUpload = (props: UploadProps, emit: SetupContext<UploadEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'upload'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}