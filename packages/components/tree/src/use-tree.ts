import { useCss, useProvideTree } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TreeEmits, TreeProps } from "./tree"
export const useTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree'
  })), { _class } = useCss(classVal, _ref)
    , { idAlias, typeCols, filter } = useProvideTree(props, emit)
    , Pdata = computed(filter)
  return {
    _ref,
    _class,
    idAlias,
    typeCols,
    Pdata
  }
}