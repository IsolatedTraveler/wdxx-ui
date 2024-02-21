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
  expandVal: Ref<Array<string | number>>
  click: ClickEvent
  isExpand: (prop: TreeItemProps, pid?: Array<string | number> | undefined) => ComputedRef<boolean>
}
export const provideTreeId: InjectionKey<ProvideTree> = Symbol('tree')
function judgeExpand(props: TreeProps, idAlias: ComputedRef<string | number>, click: ClickEvent, clickVal: Ref<string | number>) {
  const isIntExpand: Ref<boolean> = ref(true), expandVal: Ref<Array<string | number>> = ref([])
    , isExpand = (prop: TreeItemProps, pid: Array<string | number> | undefined) => {
      return computed(() => {
        let data = prop.data, id = prop.data[idAlias.value]
        if (props.expand === false) {
          return true
        } else if (expandVal.value.includes(id)) {
          return true
        } else if (clickVal.value == id) {
          return true
        } else if (isIntExpand.value && props.expand == id) {
          isIntExpand.value = false
          click(id, data, pid)
          return true
        }
        return false
      })
    }
  watch(() => props.expand, () => {
    isIntExpand.value = true
  })
  return {
    expandVal, isExpand
  }
}
export const useProvideTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  const idAlias = computed(() => props?.alias?.id || 'id')
    , childAlias = computed(() => props?.alias?.child || 'child')
    , pIdAlias = computed(() => props?.alias?.pId || 'pid')
    , mcAlias = computed(() => props?.alias?.mc || 'mc')
    , cols = computed(() => props?.cols || []) // 一行显示的列参数
    , typeCols = computed(() => cols.value.filter(it => it.type == 'temp')) // 模板列
    , clickVal: Ref<string | number> = ref('')
    , click = (id: string | number, data: ObjAny, pid?: Array<string | number>) => {
      emit(EventSelect, data)
      if (clickVal.value != id) {
        clickVal.value = id
        if (pid && !expandVal.value.includes(pid.slice(-1)[0])) {
          expandVal.value = pid
          emit(EventExpand, data)
        }
        emit(EventCheck, data)
      }
    }
    , { expandVal, isExpand } = judgeExpand(props, idAlias, click, clickVal)
  provide(provideTreeId, {
    idAlias,
    pIdAlias,
    mcAlias,
    cols,
    typeCols,
    click,
    expandVal,
    isExpand,
    childAlias
  })
  return { pIdAlias, idAlias, typeCols }
}