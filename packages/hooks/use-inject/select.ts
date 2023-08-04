import { SelectProps } from "@ui/components/select/src/select";
import { inject } from "vue";
import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "../use-provide/form";
export const useInjectSelect = (props: SelectProps) => {
    const {  } = inject(provideFormItemsId, { })
  const {  } = inject(provideFormId, { })
  return {
  }
}