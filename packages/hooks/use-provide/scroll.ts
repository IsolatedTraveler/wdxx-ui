import { ScrollProps } from "@ui/components/scroll/src/scroll";
import { InjectionKey, provide } from "vue";
export interface ProvideScroll {

}
export const provideScrollId:InjectionKey<ProvideScroll> = Symbol('scroll')
export const useProvideScroll = (props: ScrollProps) => {
  provide(provideScrollId, {
    
  })
}