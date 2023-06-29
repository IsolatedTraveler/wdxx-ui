import { useCss, useProvideBtnGroup } from "@ui/hooks"
import { computed, ref } from "vue"
import { BtnGroupProps } from "./btn-group"
export const useBtnGroup = (props: BtnGroupProps) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'btn-group',
    flex: 'row',
    group: props.shape
  })), { _class } = useCss(classVal, _ref, { group: 'comCss' })
  useProvideBtnGroup(props)
  return {
    _ref,
    _class
  }
}