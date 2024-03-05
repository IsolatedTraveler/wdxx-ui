import { SelectProps } from "@ui/components/select/src/select";
import { inject } from "vue";
// import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "@ui/vars/hooks";
export const useInjectSelect = (props: SelectProps) => {
  // const { } = inject(provideFormItemsId, {})
  const { } = inject(provideFormId, {})
  return {
  }
}