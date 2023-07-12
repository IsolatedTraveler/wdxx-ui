import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, ComputedRef } from "vue"
import { CallKitEmits, CallKitProps } from "./call-kit"
export const useCallKit = (props: CallKitProps, emit: SetupContext<CallKitEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'call-kit',
    shape: props.single ? 'single' : props.shape
  })), { _class } = useCss(classVal, _ref, { shape: 'comCss' })
    , clickId = ref('')
    , id = computed(() => clickId.value || props.localId)
    , main = ref()
    , singleMedia = ref()
    , medias: ComputedRef<any[]> = computed(() => Object.values(props.media || {}).filter(it => it))
  // 独立逻辑   判断是会议还是单人通话，单人通话当一方挂断，将断开通话
  watch(() => medias.value.length, (v, o) => {
    var mediasV = medias.value
    if (v) {
      if (id.value) {
        main.value = props.media?.[id.value]
      } else {
        main.value = undefined
      }
      singleMedia.value = mediasV.filter(it => it.userId != id.value)[0]
    } else {
      main.value = undefined
      singleMedia.value = undefined
    }
    if (props.single && v == 1 && o == 2) {
      emit?.('leave', (main.value || singleMedia.value).userId)
    }
  }, { immediate: true })
  return {
    _ref,
    _class,
    main,
    clickId,
    singleMedia
  }
}