import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { TreeEmits, TreeProps } from "./tree"
import { TreeAlias } from "@ui/vars"
export const useTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'tree'
  })), { _class } = useCss(classVal, _ref), {
    child: childAlias = 'child',
    id: idAlias = 'id',
    pId: pIdAlias = 'pid',
    mc: mcAlias = 'mc'
  } = (props.alias || {}) as TreeAlias
  console.log(childAlias, idAlias, pIdAlias, mcAlias)
  return {
    _ref,
    _class,
    idAlias
  }
}