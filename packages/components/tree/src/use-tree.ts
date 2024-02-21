import { useCssInit, useProvideTree } from "@ui/hooks"
import { ref, SetupContext } from "vue"
import { TreeEmits, TreeProps } from "./tree"
export const useTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
    , { _class } = useCssInit(props, 'tree')
    , { idAlias, typeCols, tData } = useProvideTree(props, emit)
  return {
    _ref,
    _class,
    idAlias,
    typeCols,
    tData
  }
}