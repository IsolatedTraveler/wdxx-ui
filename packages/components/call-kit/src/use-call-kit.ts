import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, watch, ComputedRef, nextTick } from "vue"
import { CallKitEmits, CallKitProps } from "./call-kit"
export const useCallKit = (props: CallKitProps, emit: SetupContext<CallKitEmits>['emit']) => {
  const _ref = ref<HTMLDivElement>(), _refMulti = ref<any>(),
    multiWidth = ref<Number>(), classVal = computed(() => ({
      name: 'call-kit',
      shape: props.single ? 'single' : (props.shape || 'meet')
    })), { _class } = useCss(classVal, _ref, { shape: 'comCss' })
    , clickId = ref('')
    , id = computed(() => props.mainId || clickId.value || props.localId)
    , main = computed(() => id.value ? props.media?.[id.value] : undefined)
    , medias: ComputedRef<any[]> = computed(() => Object.values(props.media || {}).filter(it => it && it.userId != id.value))
    , singleMedia = computed(() => props.single && medias.value.length ? medias.value.filter(it => it.userId != id.value)[0] : undefined)
  // 独立逻辑   判断是会议还是单人通话，单人通话当一方挂断，将断开通话
  watch(() => singleMedia.value, (v, o) => {
    if (v === undefined && o !== undefined) {
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
      multiWidth.value = _refMulti.value?.ref?.clientWidth
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