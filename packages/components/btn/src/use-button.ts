import { computed, ref } from "vue"
import { BtnProps } from "./btn"

export const useBtn = (props: BtnProps, emit: any) => {
  const _ref = ref<HTMLButtonElement>()
  const handleClick = (evt: MouseEvent) => {
    emit('click', evt)
  }
  const _disabled = computed(() => props.disabled)
  const _size = computed(() => props.size)
  return {
    _ref,
    handleClick,
    _disabled,
    _size
  }
}