import { FlexAutoProps } from "@ui/components/flex/src/flex-auto";
import { inject } from "vue";
import { providFlexId } from "../use-provide/flex";
export const useInjectFlexAuto = (props: FlexAutoProps) => {
  const { } = inject(provideFlexId, {})
  return {
  }
}