import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TreeItemEmits, TreeItemProps } from "./tree-item"
export const useTreeItem = (props: TreeItemProps, emit: SetupContext<TreeItemEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree-item'
  })), { _class } = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}