import { FormProps } from "@ui/components/form/src/form";
import { PropsBaseSizeV } from "@ui/vars/props";
import { ComputedRef, InjectionKey, computed, provide } from "vue";
export interface ProvideFormProp{
  disabled:boolean|undefined
  readonly:boolean|undefined
  size?:PropsBaseSizeV|undefined
  tabIndex?:number|undefined
  validateFun:object|undefined
}
export interface ProvideForm {
  prop?:ComputedRef<ProvideFormProp>
  submit?:(()=>void)|undefined
  clear?:(()=>void)|undefined
}
export const provideFormId:InjectionKey<ProvideForm> = Symbol('form')
export const useProvideForm = (props: FormProps) => {
  provide(provideFormId, {
    prop: computed(()=>({
      disabled:props.disabled,
      readonly:props.readonly,
      size:props.size,
      tabIndex:props.tabIndex as number,
      validateFun:props.validateFun
    })),
    submit(){},
    clear(){}
  })
}