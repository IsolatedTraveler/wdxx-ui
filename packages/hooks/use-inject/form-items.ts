import { FormItemsProps } from "@ui/components/form-items/src/form-items";
import { inject } from "vue";
import { provideFormId } from "../use-provide/form";
export const useInjectFormItems = (props: FormItemsProps) => {
    const {  } = inject(provideFormId, { })
  return {
  }
}