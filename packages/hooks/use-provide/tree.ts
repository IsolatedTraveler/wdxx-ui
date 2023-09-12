import { TreeProps } from "@ui/components/tree/src/tree";
import { InjectionKey, computed, provide } from "vue";
export interface ProvideTree {

}
export const provideTreeId: InjectionKey<ProvideTree> = Symbol('tree')
export const useProvideTree = (props: TreeProps) => {
  const alias = computed(() => {
    const { alias: { id: idAlias = 'id', child: childAlias = 'child', pId: pIdAlias = 'pid', mc: mcAlias = 'mc' } = {} } = props
    return { idAlias, childAlias, pIdAlias, mcAlias }
  })
  provide(provideTreeId, {
    alias
  })
}