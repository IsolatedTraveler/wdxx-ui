import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TreeEmits, TreeProps } from "./tree"
export const useTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}