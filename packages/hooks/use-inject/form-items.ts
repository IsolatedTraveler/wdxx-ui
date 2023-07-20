import { FormItemsProps } from "@ui/components/form-items/src/form-items";
import { inject } from "vue";
import { provideFormId } from "../use-provide/form";
export const useInjectFormItems = (props: FormItemsProps) => {
    const { disabled,readonly,size,submit,clear,validateFun,tabIndex } = inject(provideFormId, { })
  return {
    disabled:props.disabled || disabled,
    readonly:props.readonly || readonly,
    size,
    submit,
    clear,
    tabIndex,
    validateFun: Object.assign({},validateFun, props.validateFun)
  }
}