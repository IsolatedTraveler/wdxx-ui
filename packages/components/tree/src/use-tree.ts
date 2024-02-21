import { useCssInit, useProvideTree } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TreeEmits, TreeProps } from "./tree"
export const useTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>()
    , { _class } = useCssInit(props, 'tree')
    , { pIdAlias, idAlias, typeCols } = useProvideTree(props, emit)
    , Pdata = computed(() => {
      return (props.data || []).filter(it => {
        return (it[pIdAlias.value] || '') === props.pId || ''
      })
    })
  return {
    _ref,
    _class,
    idAlias,
    typeCols,
    Pdata
  }
}