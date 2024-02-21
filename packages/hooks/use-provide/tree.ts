import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { TreeProps, TreeEmits } from "@ui/components/tree/src/tree";
import { EventCheck, EventExpand, EventSelect, ObjAny, PropsTreeColType } from "@ui/vars";
import { ComputedRef, InjectionKey, Ref, SetupContext, computed, provide, ref, watch } from "vue";
export interface Col {
  id: string,
  type: PropsTreeColType
}
declare type ClickEvent = (id: string | number, data: ObjAny, pid?: Array<string | number>) => void
export interface ProvideTree {
  idAlias: ComputedRef<string | number>
  pIdAlias: ComputedRef<string | number>
  childAlias: ComputedRef<string | number>
  mcAlias: ComputedRef<string | number>
  cols: ComputedRef<Array<ObjAny>>
  typeCols: ComputedRef<Array<ObjAny>>
  click: ClickEvent,
  expandVal: Ref<Array<string | number>>
}
export const provideTreeId: InjectionKey<ProvideTree> = Symbol('tree')
function formatTreeData(
  data: Array<any>,
  id: string = 'id',
  pId: string = 'pid',
  child: string = 'children',
  root: string | number = '') {
  var tData: Array<ObjAny> = [], obj: ObjAny = {}
  data.filter(it => {
    var idVal = it[id] || ''
    obj[idVal] = it
    it[child] = it[child] || []
    if (idVal === root) {
      tData.push(it)
    } else {
      var pIdVal = it[pId] || '', pItem = obj[pIdVal]
      if (pItem) {
        pItem[child].push(it)
      } else {
        return true
      }
    }
  }).forEach(it => {
    var pIdVal = it[pId] || '', pItem = obj[pIdVal]
    if (pItem) {
      pItem[child].push(it)
    } else {
      tData.push(it)
    }
  })
  return tData
}
export const useProvideTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const idAlias = computed(() => props?.alias?.id || 'id')
    , childAlias = computed(() => props?.alias?.child || 'child')
    , pIdAlias = computed(() => props?.alias?.pId || 'pid')
    , mcAlias = computed(() => props?.alias?.mc || 'mc')
    , cols = computed(() => props?.cols || []) // 一行显示的列参数
    , typeCols = computed(() => cols.value.filter(it => it.type == 'temp')) // 模板列
    , clickVal: Ref<string | number> = ref('')
    , expandVal: Ref<Array<string | number>> = ref([])
    , click = (id: string | number, data: ObjAny, pid: Array<string | number> = []) => {
      emit(EventSelect, data)
      if (clickVal.value != id) {
        clickVal.value = id
        emit(EventCheck, data)
      }
      if (expandVal.value?.[0] !== (pid?.[0] || id)) {
        expandVal.value = [...pid, id]
      }
    }
    , tData = computed(() => {
      return formatTreeData(props.data || [], idAlias.value, pIdAlias.value, childAlias.value, props.root || '')
    })
  provide(provideTreeId, {
    idAlias,
    pIdAlias,
    mcAlias,
    cols,
    typeCols,
    click,
    childAlias,
    expandVal
  })
  return { pIdAlias, idAlias, typeCols, tData, expandVal }
}