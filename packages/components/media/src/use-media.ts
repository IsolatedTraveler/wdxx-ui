import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, nextTick } from "vue"
import { MediaEmits, MediaProps } from "./media"
export const useMedia = (props: MediaProps, emit: SetupContext<MediaEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'media'
  })), { _class } = useCss(classVal, _ref)
  watch(() => props.video, (v, o) => {
    if (v && !o) {
      if (_ref.value) {
        v.play(_ref.value)
      } else {
        nextTick(() => {
          v.play(_ref.value)
        })
      }
    }
  }, { immediate: true })
  return {
    _ref,
    _class
  }
}