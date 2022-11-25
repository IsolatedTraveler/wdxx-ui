import { computed, ref, SetupContext } from "vue"
import type { BtnProps, BtnEmits } from "./btn"

export const useBtn = (props: BtnProps, emit: SetupContext<BtnEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
  const handleClick = (evt: MouseEvent) => {
    emit('click', evt)
  }
  const _disabled = computed(() => props.disabled)
  const _class = computed(() => props.size)
  return {
    _ref,
    handleClick,
    _disabled,
    _class
  }
}