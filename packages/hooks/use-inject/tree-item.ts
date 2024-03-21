import { TreeItemProps } from "@ui/components/tree/src/item/tree-item";
import { computed, inject, ref, watch } from "vue";
import { ProvideTree, provideTreeId, TreeItemSelectLx } from "../use-provide/tree";
export const useInjectTreeItem = (props: TreeItemProps) => {
  // 获取tree上的通用数据
  const { idAlias, mcAlias, cols, typeCols, click, childAlias, expandVal, selectObj } = inject(provideTreeId, {} as ProvideTree)
    , mc = computed(() => props.data[mcAlias.value] || '')
    , id = computed(() => props.data[idAlias.value] || '')
    // 获取子元素
    , child = computed(() => {
      return props.data[childAlias.value] || []
    })
    // 计算当前元素父子层级
    , cIndex = computed(() => (props.childIndex || 0) + 1)
    // 点击当前元素触发事件
    , selected = function (lx: TreeItemSelectLx) {
      click(id.value, props.data, lx, props.pid)
    }
    // 判断当前元素是否选中
    , isSelected = ref<boolean>(false)
    // 判断当前元素是否展开
    , isExpand = computed(() => {
      if (props.isExpand) {
        return expandVal.value[props.childIndex || 0] == id.value || isSelected.value
      }
      return false
    })
  watch(() => selectObj.value[id.value], (v) => {
    isSelected.value = !!v
    if (v && v === true) {
      selected(1)
    }
  }, { immediate: true })
  return {
    mc,
    idAlias,
    cols,
    typeCols,
    child,
    cIndex,
    selected,
    isExpand
  }
}