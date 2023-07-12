import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, ComputedRef, nextTick } from "vue"
import { CallKitEmits, CallKitProps } from "./call-kit"
import { FlexInstance } from "@ui/components/flex"
export const useCallKit = (props: CallKitProps, emit: SetupContext<CallKitEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), _refMulti = ref<FlexInstance>(),
    multiWidth = ref<Number>(), classVal = computed(() => ({
      name: 'call-kit',
      shape: props.single ? 'single' : (props.shape || 'meet')
    })), { _class } = useCss(classVal, _ref, { shape: 'comCss' })
    , clickId = ref('')
    , id = computed(() => props.mainId || clickId.value || props.localId)
    , main = ref()
    , singleMedia = ref()
    , medias: ComputedRef<any[]> = computed(() => Object.values(props.media || {}).filter(it => it && it.userId != id.value))
  // 独立逻辑   判断是会议还是单人通话，单人通话当一方挂断，将断开通话
  watch(() => props.media, (v) => {
    if (v) {
      if (id.value) {
        main.value = props.media?.[id.value]
      } else {
        main.value = undefined
      }
    }
  })
  watch(() => medias.value.length, (v, o) => {
    var mediasV = medias.value
    if (v) {
      singleMedia.value = mediasV.filter(it => it.userId != id.value)[0]
    } else {
      main.value = undefined
      singleMedia.value = undefined
    }
    if (props.single && v == 1 && o == 2) {
      emit?.('leave', (main.value || singleMedia.value).userId)
    }
  }, { immediate: true })
  // 多人通话，获取宽度
  watch(() => props.single, (v) => {
    if (!v) {
      setMultiWidth()
    }
  }, { immediate: true })
  function setMultiWidth() {
    if (_refMulti.value) {
      multiWidth.value = _refMulti.value.ref.clientWidth
    } else {
      nextTick(() => {
        setMultiWidth()
      })
    }
  }
  return {
    _ref, _refMulti,
    _class,
    main,
    clickId,
    singleMedia,
    medias,
    multiWidth
  }
}