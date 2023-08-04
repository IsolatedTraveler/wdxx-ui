import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { BtnGroupEmits, BtnGroupProps } from "./btn-group"
export const useBtnGroup = (props: BtnGroupProps, emit: SetupContext<BtnGroupEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'btn-group'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}