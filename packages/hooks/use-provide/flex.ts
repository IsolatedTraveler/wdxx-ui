import { FlexProps } from "@ui/components/flex/src/flex";
import { InjectionKey, provide } from "vue";
export interface ProvideFlex {

}
export const provideFlexId:InjectionKey<ProvideFlex> = Symbol('flex')
export const useProvideFlex = (props: FlexProps) => {
  provide(provideFlexId, {
    
  })
}