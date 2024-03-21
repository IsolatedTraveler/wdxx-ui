import { TreeProps, TreeEmits } from "@ui/components/tree/src/tree";
import { TreeVal } from "@ui/props";
import { EventCheck, EventSelect, EventSetVal, EventUpdate, ObjAny, PropsTreeColType } from "@ui/vars";
import { ComputedRef, InjectionKey, Ref, SetupContext, computed, provide, ref, watch } from "vue";
export interface Col {
  id: string,
  type: PropsTreeColType
}
export type TreeItemSelectLx = 1 | 2
// 1 value改变赋值   2   点击事件触发
declare type ClickEvent = (id: string | number, data: ObjAny, lx: TreeItemSelectLx, pid?: Array<string | number>) => void
export interface ProvideTree {
  idAlias: ComputedRef<string | number>
  childAlias: ComputedRef<string | number>
  mcAlias: ComputedRef<string | number>
  cols: ComputedRef<Array<ObjAny>>
  typeCols: ComputedRef<Array<ObjAny>>
  click: ClickEvent,
  expandVal: Ref<Array<string | number>>
  selectObj: Ref<ObjAny>
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
function getVal(lx: TreeItemSelectLx, obj: any, id: string | number, data: any, oid?: any) {
  if (lx === 2 && obj[id]) {
    obj[id] = false
    return ''
  } else {
    oid && (obj[oid] = false)
    obj[id] = data
    return id
  }
}
export const useProvideTree = (props: TreeProps, emit: SetupContext<TreeEmits>['emit']) => {
  // 基础参数获取
  const idAlias = computed(() => props?.alias?.id || 'id')
    , childAlias = computed(() => props?.alias?.child || 'child')
    , pIdAlias = computed(() => props?.alias?.pId || 'pid')
    , mcAlias = computed(() => props?.alias?.mc || 'mc')
    , cols = computed(() => props?.cols || []) // 一行显示的列参数
    , typeCols = computed(() => cols.value.filter(it => it.type == 'temp')) // 模板列
    // 格式化树形数据
    , tData = computed(() => {
      return formatTreeData(props.data || [], idAlias.value, pIdAlias.value, childAlias.value, props.root || '')
    })
    // 选中选项
    , selectObj: Ref<ObjAny> = ref({})
    // 选中值
    , clickVal: Ref<TreeVal> = ref(props.multi ? [] : '')
    // 展开层级
    , expandVal: Ref<Array<string | number>> = ref([])
    // 点击事件
    , click = (id: string | number, data: ObjAny, lx: TreeItemSelectLx, pid: Array<string | number> = []) => {
      const obj = selectObj.value, judge = obj[id]
      emit(EventSelect, data)
      // 选中选项赋值 和选中值赋值
      if (props.multi) {
        const val = clickVal.value as Array<string | number>
        if (getVal(lx, obj, id, data)) {
          val.push(id)
        } else {
          clickVal.value = val.filter(it => it != id)
        }
      } else {
        clickVal.value = getVal(lx, obj, id, data, clickVal.value)
        if (!judge && clickVal.value) {
          emit(EventCheck, data)
        }
      }
      if (expandVal.value !== pid) {
        expandVal.value = pid
      }
      emit(EventUpdate, clickVal.value)
      emit(EventSetVal, props.multi ? (clickVal.value as Array<string | number>).map((id: any) => selectObj.value[id]) : selectObj.value[clickVal.value as any])
    }
  // 根据值初始化表格信息
  watch(() => props.modelValue || props.value, (v: any) => {
    if (v && v != clickVal.value) {
      clickVal.value = v
      selectObj.value = {}
      const obj = selectObj.value
      if (typeof v == 'object') {
        v.forEach((key: string | number) => {
          obj[key] = true
        })
      } else {
        obj[v] = true
      }
    }
  }, { immediate: true })
  provide(provideTreeId, {
    idAlias,
    mcAlias,
    cols,
    typeCols,
    click,
    childAlias,
    expandVal,
    selectObj
  })
  return { idAlias, typeCols, tData }
}