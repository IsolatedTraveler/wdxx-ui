import { useCssInit } from "@ui/hooks"
import { ref } from "vue"
import { TreeItemProps } from "./tree-item"
import { useInjectTreeItem } from "@ui/hooks/use-inject"
export const useTreeItem = (props: TreeItemProps) => {
  // 定义元素
  const _ref = ref<HTMLButtonElement>()
    // 定义样式
    , { _class, classVal } = useCssInit(props, 'tree-item')
    // tree数据处理
    , { mc, idAlias, typeCols, cols, child, selected, cIndex, isExpand } = useInjectTreeItem(props, classVal)
  return {
    _ref,
    _class,
    mc,
    idAlias,
    typeCols,
    cols,
    child,
    selected,
    cIndex,
    isExpand
  }
}