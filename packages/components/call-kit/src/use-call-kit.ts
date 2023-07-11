import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed, ComputedRef, Ref } from "vue"
import { CallKitEmits, CallKitProps } from "./call-kit"
export const useCallKit = (props: CallKitProps, emit: SetupContext<CallKitEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'call-kit',
    shape: props.single ? 'single' : props.shape
  })), { _class } = useCss(classVal, _ref, { shape: 'comCss' })
    , clickId: Ref<string> = ref('')
    , id: ComputedRef<string> = computed(() => (clickId.value || props.localId || '') as string)
  console.log(id)
  return {
    _ref,
    _class
  }
}