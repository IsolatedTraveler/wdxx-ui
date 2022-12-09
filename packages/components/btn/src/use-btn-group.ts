import { useCss } from "@ui/hooks"
import { computed, ref } from "vue"
import { BtnGroupProps } from "./btn-group"
export const useBtnGroup = (props: BtnGroupProps) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'btn-group',
    flex: 'row',
    shape: props.shape
  })), {_class} = useCss(classVal.value, _ref)
  return {
    _ref,
    _class
  }
}