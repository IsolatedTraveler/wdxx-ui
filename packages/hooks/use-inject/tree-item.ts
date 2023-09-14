import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { computed, inject } from "vue";
import { ProvideTree, provideTreeId } from "../use-provide/tree";
export const useInjectTreeItem = (props: TreeItemProps) => {
  const { idAlias, mcAlias, childAlias, cols, typeCols } = inject(provideTreeId, {} as ProvideTree)
    , mc = computed(() => props.data?.[mcAlias.value])
    , child = computed(() => props.data?.[childAlias.value])
  return {
    mc,
    idAlias,
    child,
    cols,
    typeCols
  }
}