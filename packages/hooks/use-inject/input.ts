import { InputProps } from "@ui/components/input/src/input";
import { computed, inject } from "vue";
import { provideFormItemsId } from "../use-provide/form-items";
import { provideFormId } from "../use-provide/form";
export const useInjectInput = (props: InputProps) => {
    const { submit, clear,prop } = inject(provideFormItemsId, inject(provideFormId, { }))
    return {
      submit,
      clear,
      prop: computed(()=>{
        const value = prop?.value || ({} as any)
        const {disabled,readonly,size,validateFun,tabIndex} = value
        return {
          disabled:props.disabled || disabled,
          readonly:props.readonly || readonly,
          size,
          tabIndex:(tabIndex||0)*100+((props.tabIndex as number)||0),
          validateFun: Object.assign({},validateFun, props.validateFun)
        }
      })
    }
}