import { FlexChildProps } from "@ui/components/flex/src/flex-child";
import { inject } from "vue";
import { provideFlexId } from "../use-provide/flex";
export const useInjectFlexAuto = (props: FlexChildProps) => {
  const { } = inject(provideFlexId, {})
  return {
  }
}