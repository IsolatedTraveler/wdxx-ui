import { useProvidePop } from "@ui/hooks"
import { SetupContext } from "vue"
import { PopEmits, PopProps } from "./pop"
export const usePop = (props: PopProps, emit: SetupContext<PopEmits>['emit']) => {
  const { init } = useProvidePop(props)
  return {
    init
  }
}