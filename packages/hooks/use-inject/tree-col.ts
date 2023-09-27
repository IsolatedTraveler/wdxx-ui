import { TreeColProps } from "@ui/components/tree/src/col/tree-col";
import { computed, inject } from "vue";
import { ProvideTree, provideTreeId } from "../use-provide/tree";
export const useInjectTreeCol = (props: TreeColProps) => {
  const { idAlias, mcAlias, cols, typeCols } = inject(provideTreeId, {} as ProvideTree)
    , mc = computed(() => props.data?.[mcAlias.value])
  return {
    mc,
    idAlias,
    cols,
    typeCols
  }
}