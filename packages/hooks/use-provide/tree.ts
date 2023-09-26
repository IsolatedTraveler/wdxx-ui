import { TreeProps, TreeEmits } from "@ui/components/tree/src/tree";
import { EventSelect, ObjAny, propsTreeColType } from "@ui/vars";
import { ComputedRef, InjectionKey, SetupContext, computed, provide } from "vue";
export interface Col {
  id: string,
  type: propsTreeColType
}
export interface ProvideTree {
  idAlias: ComputedRef<string | number>
  pIdAlias: ComputedRef<string | number>
  mcAlias: ComputedRef<string | number>
  cols: ComputedRef<Array<ObjAny>>
  typeCols: ComputedRef<Array<ObjAny>>
  click: Function
  filter: Function
}
export const provideTreeId: InjectionKey<ProvideTree> = Symbol('tree')
export const useProvideTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const idAlias = computed(() => props?.alias?.id || 'id')
    , childAlias = computed(() => props?.alias?.child || 'child')
    , pIdAlias = computed(() => props?.alias?.pId || 'pid')
    , mcAlias = computed(() => props?.alias?.mc || 'mc')
    , cols = computed(() => props?.cols || [])
    , typeCols = computed(() => (props.cols || []).filter(it => it.type == 'temp'))
    , click = (data: ObjAny) => {
      emit(EventSelect, data)
    }
    , filter = (id: string = '', data: ObjAny = {}) => {
      return data[childAlias.value] || props.data?.filter(it => {
        return (it[pIdAlias.value] || '') == id
      })
    }
  provide(provideTreeId, {
    idAlias,
    pIdAlias,
    mcAlias,
    cols,
    typeCols,
    click,
    filter
  })
  return { idAlias, typeCols, filter }
}