import { FormProps } from "@ui/components/form/src/form";
import { InjectionKey, provide } from "vue";
export interface ProvideForm {

}
export const provideFormId:InjectionKey<ProvideForm> = Symbol('form')
export const useProvideForm = (props: FormProps) => {
  provide(provideFormId, {
    
  })
}