import { InputProps } from "@ui/components/input/src/input";
import { inject } from "vue";
import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "../use-provide/form";
export const useInjectInput = (props: InputProps) => {
    const {  } = inject(provideFormItemsId, { })
  const {  } = inject(provideFormId, { })
  return {
  }
}