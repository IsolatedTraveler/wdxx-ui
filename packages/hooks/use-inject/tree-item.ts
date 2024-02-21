import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { computed, inject } from "vue";
import { ProvideTree, provideTreeId } from "../use-provide/tree";
export const useInjectTreeItem = (props: TreeItemProps) => {
  const { idAlias, mcAlias, cols, typeCols, click, childAlias } = inject(provideTreeId, {} as ProvideTree)
    , mc = computed(() => props.data[mcAlias.value])
    , id = computed(() => props.data[idAlias.value])
  return {
    mc,
    idAlias,
    cols,
    typeCols,
    click,
    id,
    childAlias
  }
}