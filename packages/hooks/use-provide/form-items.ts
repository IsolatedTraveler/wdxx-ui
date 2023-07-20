import { FormItemsProps } from "@ui/components/form-items/src/form-items";
import { InjectionKey, provide } from "vue";
export interface ProvideFormItems {

}
export const provideFormItemsId:InjectionKey<ProvideFormItems> = Symbol('form-items')
export const useProvideFormItems = (props: FormItemsProps) => {
  provide(provideFormItemsId, {
    
  })
}