import { useCss } from "@ui/hooks"
import { ref, computed } from "vue"
import { TreeItemProps } from "./tree-item"
import { useInjectTreeItem } from "@ui/hooks/use-inject"
export const useTreeItem = (props: TreeItemProps) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree-item'
  })), { _class } = useCss(classVal, _ref)
    , { mc, child, idAlias, typeCols, cols, click } = useInjectTreeItem(props)
  function selected() {
    click(props.data)
  }
  return {
    _ref,
    _class,
    mc,
    child,
    idAlias,
    typeCols,
    cols,
    selected
  }
}