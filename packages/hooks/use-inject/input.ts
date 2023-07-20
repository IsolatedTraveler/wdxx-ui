import { InputProps } from "@ui/components/input/src/input";
import { inject } from "vue";
import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "../use-provide/form";
export const useInjectInput = (props: InputProps) => {
    const { disabled,readonly,size, submit, clear, tabIndex, validateFun } = inject(provideFormItemsId, inject(provideFormId, { }))
  return {
    disabled:props.disabled || disabled,
    readonly:props.readonly || readonly,
    size: size|| props.size,
    submit,
    clear,
    tabIndex: (tabIndex||0)*100+((props.tabIndex as number)||0),
    validateFun: Object.assign({},validateFun, props.validateFun)
  }
}