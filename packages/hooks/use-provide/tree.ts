import { TreeProps } from "@ui/components/tree/src/tree";
import { ComputedRef, InjectionKey, computed, provide } from "vue";
export interface ProvideTree {
  idAlias: ComputedRef<string | number>
  childAlias: ComputedRef<string | number>
  pIdAlias: ComputedRef<string | number>
  mcAlias: ComputedRef<string | number>
}
export const provideTreeId: InjectionKey<ProvideTree> = Symbol('tree')
export const useProvideTree = (props: TreeProps) => {
  const idAlias = computed(() => props?.alias?.id || 'id')
    , childAlias = computed(() => props?.alias?.child || 'child')
    , pIdAlias = computed(() => props?.alias?.pId || 'pid')
    , mcAlias = computed(() => props?.alias?.mc || 'mc')
  provide(provideTreeId, {
    idAlias,
    childAlias,
    pIdAlias,
    mcAlias
  })
  return { idAlias }
}