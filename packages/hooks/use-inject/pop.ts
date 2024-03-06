import { PopProps } from "@ui/components/pop/src/pop";
import { inject } from "vue";
import { provideScrollId } from "../use-provide/scroll";
export const useInjectPop = (props: PopProps) => {
    const {  } = inject(provideScrollId, { })
  return {
  }
}