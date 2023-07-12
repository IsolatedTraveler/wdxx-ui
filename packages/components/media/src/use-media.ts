import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, nextTick, onMounted } from "vue"
import { MediaEmits, MediaProps } from "./media"
export const useMedia = (props: MediaProps, emit: SetupContext<MediaEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), classVal = computed(() => ({
    name: 'media'
  })), { _class, _style } = useCss(classVal, _ref)
    , calc = document.body.clientHeight / document.body.clientWidth
  var maxWidth: number, marginLeft: number
  function setHeight(width) {
    var el = _ref.value
    if (el) {
      var elWidth = el.clientWidth
      if (!maxWidth) {
        var obj = getComputedStyle(el)
        maxWidth = parseFloat(obj.maxWidth)
        marginLeft = parseFloat(obj.marginLeft)
      }
      if (width > maxWidth) {
        elWidth = (width / Math.ceil(width / maxWidth)) - marginLeft - 1
        _style.value.width = (elWidth / 100) + 'rem'
      }
      _style.value.height = (calc * elWidth / 100) + 'rem'
    } else {
      nextTick(() => {
        setHeight(width)
      })
    }
  }
  watch(() => props.auto, (v) => {
    if (v) {
      setHeight(v)
    } else {
      _style.value.width = undefined
      _style.value.height = undefined
    }
  }, { immediate: true })
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
    _class,
    _style
  }
}