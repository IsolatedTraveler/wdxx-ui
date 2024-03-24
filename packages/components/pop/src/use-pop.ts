import { useCssInit, useProvidePop } from "@ui/hooks"
import { SetupContext, ref, watch } from "vue"
import { PopEmits, PopProps } from "./pop"
export const usePop = (props: PopProps, emit: SetupContext<PopEmits>['emit']) => {
  const _ref = ref<any>(), { _class, _style, styleVal } = useCssInit(props, 'pop')
    , { init } = useProvidePop(props,emit, _ref, styleVal)
  watch(() => props.zIndex, (v) => {
    styleVal.zIndex = v
  }, { immediate: true })
  return {
    init, _ref, _class, _style
  }
}