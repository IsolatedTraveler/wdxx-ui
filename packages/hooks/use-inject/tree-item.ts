import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { computed, inject } from "vue";
import { ProvideTree, provideTreeId } from "../use-provide/tree";
export const useInjectTreeItem = (props: TreeItemProps) => {
  const { idAlias, mcAlias, cols, typeCols, click, isExpand, childAlias } = inject(provideTreeId, {} as ProvideTree)
    , mc = computed(() => props.data[mcAlias.value])
    , id = computed(() => props.data[idAlias.value])
    , judgeExpand = isExpand(props, props.pid)
  return {
    mc,
    idAlias,
    cols,
    typeCols,
    click,
    judgeExpand,
    id,
    childAlias
  }
}