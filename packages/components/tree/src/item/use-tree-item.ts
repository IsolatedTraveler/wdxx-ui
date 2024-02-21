import { useCss } from "@ui/hooks"
import { ref, computed } from "vue"
import { TreeItemProps } from "./tree-item"
import { useInjectTreeItem } from "@ui/hooks/use-inject"
export const useTreeItem = (props: TreeItemProps) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree-item'
  })), { _class } = useCss(classVal, _ref)
    , { mc, idAlias, typeCols, cols, click, judgeExpand, childAlias } = useInjectTreeItem(props)
    , child = computed(() => {
      return props.data[childAlias.value] || []
    })
  function selected() {
    click(props.data[idAlias.value], props.data, props.pid)
  }
  setTimeout(() => {
    if (props.data[idAlias.value] === 'component') {
      console.log(judgeExpand.value)
    }
  }, 5000);
  return {
    _ref,
    _class,
    mc,
    child,
    idAlias,
    typeCols,
    cols,
    selected,
    judgeExpand
  }
}