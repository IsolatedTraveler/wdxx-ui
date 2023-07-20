import { FormItemsProps } from "@ui/components/form-items/src/form-items";
import { PropsBaseSizeV } from "@ui/vars/props";
import { InjectionKey, provide } from "vue";
import { useInjectFormItems } from "../use-inject";
export interface ProvideFormItems {
  disabled?:boolean|undefined
  readonly?:boolean|undefined
  size?:PropsBaseSizeV|undefined
  tabIndex?:number|undefined
  validateFun?:object|undefined
  submit?:(()=>void) | undefined
  clear?:(()=>void) | undefined
}
export const provideFormItemsId:InjectionKey<ProvideFormItems> = Symbol('form-items')
export const useProvideFormItems = (props: FormItemsProps) => {
  provide(provideFormItemsId, useInjectFormItems(props))
}