import { SelectProps } from "@ui/components/select/src/select";
import { inject } from "vue";
import { provideFormId } from "@ui/vars/hooks";
export const useInjectSelect = (props: SelectProps) => {
  const { } = inject(provideFormId, {})
  return {
  }
}