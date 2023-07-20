import { FormProps } from "@ui/components/form/src/form";
import { PropsBaseSizeV } from "@ui/vars/props";
import { InjectionKey, provide } from "vue";
export interface ProvideForm {
  disabled?:boolean|undefined
  readonly?:boolean|undefined
  size?:PropsBaseSizeV|undefined
  tabIndex?:number|undefined
  validateFun?:object|undefined
  submit?:()=>void
  clear?:()=>void
}
export const provideFormId:InjectionKey<ProvideForm> = Symbol('form')
export const useProvideForm = (props: FormProps) => {
  provide(provideFormId, {
    disabled:props.disabled,
    readonly:props.readonly,
    size:props.size,
    tabIndex:props.tabIndex as number,
    validateFun:props.validateFun,
    submit(){},
    clear(){}
  })
}