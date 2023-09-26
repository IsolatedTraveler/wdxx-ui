import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { computed, inject } from "vue";
import { ProvideTree, provideTreeId } from "../use-provide/tree";
export const useInjectTreeItem = (props: TreeItemProps) => {
  const { idAlias, mcAlias, cols, typeCols, click, filter } = inject(provideTreeId, {} as ProvideTree)
    , mc = computed(() => props.data?.[mcAlias.value])
    , child = computed(() => filter(props.data[idAlias.value], props.data))
  return {
    mc,
    idAlias,
    child,
    cols,
    typeCols,
    click
  }
}