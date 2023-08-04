import { TreeProps } from "@ui/components/tree/src/tree";
import { InjectionKey, provide } from "vue";
export interface ProvideTree {

}
export const provideTreeId:InjectionKey<ProvideTree> = Symbol('tree')
export const useProvideTree = (props: TreeProps) => {
  provide(provideTreeId, {
    
  })
}