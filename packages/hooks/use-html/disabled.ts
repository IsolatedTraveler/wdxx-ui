import { computed, ref } from "vue"

export const useHtmlDisabled = (props?: any, emit?: any) => {
  const disabled = ref(false)
  const _disabled = computed(() => props?.disabled || disabled.value)
  const _handleClick = (evt: MouseEvent) => {
    if (!_disabled.value) {
      disabled.value = true
      emit(evt)
      setTimeout(() => {
        disabled.value = false
      }, 500)
    }
  }
  return { _disabled, _handleClick }
}