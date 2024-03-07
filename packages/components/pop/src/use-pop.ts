import { useCss, useProvidePop } from "@ui/hooks"
import { SetupContext, computed } from "vue"
import { PopEmits, PopProps } from "./pop"
export const usePop = (props: PopProps, emit: SetupContext<PopEmits>['emit']) => {
  const classVal = computed(() => ({
    name: 'pop'
  })), { _class } = useCss(classVal)
    , { init } = useProvidePop(props)
  return {
    _class,
    init
  }
}