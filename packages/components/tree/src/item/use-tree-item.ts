import { useCss } from "@ui/hooks"
import { ref, computed } from "vue"
import { TreeItemProps } from "./tree-item"
import { useInjectTreeItem } from "@ui/hooks/use-inject"
export const useTreeItem = (props: TreeItemProps) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree-item'
  })), { _class } = useCss(classVal, _ref)
    , { id, mc, idAlias, typeCols, cols, click, childAlias, expandVal, clickVal } = useInjectTreeItem(props)
    , child = computed(() => {
      return props.data[childAlias.value] || []
    }), cIndex = computed(() => (props.childIndex || 0) + 1)
    , isExpand = computed(() => props.isExpand && (expandVal.value[props.childIndex || 0] || clickVal.value) == id.value)
  function selected() {
    click(props.data[idAlias.value], props.data, props.pid)
  }
  return {
    _ref,
    _class,
    mc,
    child,
    idAlias,
    typeCols,
    cols,
    selected,
    cIndex,
    isExpand
  }
}