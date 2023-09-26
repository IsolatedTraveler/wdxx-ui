import { useCss } from "@ui/hooks"
import { ref, computed } from "vue"
import { TreeColProps } from "./tree-col"
import { useInjectTreeCol } from "@ui/hooks/use-inject"
export const useTreeCol = (props: TreeColProps) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree-col'
  })), { _class } = useCss(classVal, _ref)
    , { mc, child, idAlias, typeCols, cols } = useInjectTreeCol(props)
  return {
    _ref,
    _class,
    mc,
    child,
    idAlias,
    typeCols,
    cols
  }
}