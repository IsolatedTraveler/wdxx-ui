import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { inject } from "vue";
import { provideTreeId } from "../use-provide/tree";
export const useInjectTreeItem = (props: TreeItemProps) => {
  const { } = inject(provideTreeId, {})
  return {
  }
}