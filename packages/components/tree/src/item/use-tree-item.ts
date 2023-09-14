import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TreeItemEmits, TreeItemProps } from "./tree-item"
import { useInjectTreeItem } from "@ui/hooks/use-inject"
export const useTreeItem = (props: TreeItemProps, emit: SetupContext<TreeItemEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree-item'
  })), { _class } = useCss(classVal, _ref)
    , { mc, child, idAlias, cols } = useInjectTreeItem(props)
  return {
    _ref,
    _class,
    mc,
    child,
    idAlias,
    cols
  }
}