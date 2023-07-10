import { FlexProps } from "@ui/components/flex/src/flex";
import { inject } from "vue";
import { provideFlexId } from "../use-provide/flex";
export const useInjectFlex = (props: FlexProps) => {
    const {  } = inject(provideFlexId, { })
  return {
  }
}