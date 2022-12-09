import { computed, nextTick, ref } from "vue"

export const useClickDisabled = (props?: any, emit?: any) => {
  const disabled = ref(false)
  const _disabled = computed(() => props?.disabled || disabled.value)
  const _handleClick = (evt: MouseEvent) => {
    if (!_disabled.value) {
      disabled.value = true
      emit(evt)
      nextTick(() => {
        disabled.value = false
      })
    }
  }
  return {_disabled, _handleClick}
}