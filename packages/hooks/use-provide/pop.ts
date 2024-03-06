import { PopProps } from "@ui/components/pop/src/pop";
import { InjectionKey, provide } from "vue";
export interface ProvidePop {

}
export const providePopId:InjectionKey<ProvidePop> = Symbol('pop')
export const useProvidePop = (props: PopProps) => {
  provide(providePopId, {
    
  })
}