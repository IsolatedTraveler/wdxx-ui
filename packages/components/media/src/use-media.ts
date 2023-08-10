import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, nextTick } from "vue"
import { MediaEmits, MediaProps } from "./media"
import { setHeightByWidth } from "@ui/utils/css"
export const useMedia = (props: MediaProps, emit: SetupContext<MediaEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), classVal = computed(() => ({
    name: 'media'
  })), { _class, _style } = useCss(classVal, _ref)
    , calc = document.body.clientHeight / document.body.clientWidth
    , variable = { maxWidth: 0, marginLeft: 0 }
  // 设置高度
  watch(() => props.auto, (v) => {
    setHeightByWidth(v, _style.value, _ref, calc, variable)
  }, { immediate: true })
  // 播放视频
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
  // 播放音频
  watch(() => props.isAudio ? props.audio : undefined, (v, o) => {
    if (v && !o) {
      v.play()
    }
  }, { immediate: true })
  return {
    _ref,
    _class,
    _style
  }
}