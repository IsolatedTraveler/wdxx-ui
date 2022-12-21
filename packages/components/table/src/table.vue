<template>
  <div ref="_ref" :class="_class">
    <!-- 获取最大固定高度 -->
    <div :class="_main_class">
      <!-- 获取table当前高度 -->
      <table cellpadding="0" cellspacing="0">
        <colgroup>
          <col style="width: 0;"/>
          <slot></slot>
        </colgroup>
        <t-head ref="_el_thead" :cols="ths" :row-key="props.rowKey" :checked="checkedAll" :check="checkAll" :reload="reload"/>
        <t-body :cols="cols" :data="props.data" :row-key="props.rowKey" 
          :callback="props.callback"
          :check-data="checkData" :check="checkedSignle"
          :reload="reload"
        />
      </table>
    </div>
    <slot name="page" :="page">
      <z-page v-if="page" :="page"/>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { tableEmits, tableProps } from './table'
import { useTable } from './use-table'
import {ZPage} from '@ui/components/page'
import { computed } from 'vue'
import tBody from './tbody'
import tHead from './thead'
defineOptions({
  name: 'z-table'
})
const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const {_ref, _class, _main_class, _el_thead, ths, cols, reload, checkedAll, checkData, checkAll, checkedSignle} = useTable(props, emit)
const page = computed(() => {
  if (props.page) {
    return {
      small: true,
      pagerCount: 5,
      layout: 'total, sizes, prev, pager, next, jumper',
      ...props.page === true ? {} : props.page
    }
  } else {
    return false
  }
})
defineExpose({
  ref: _ref,
  clearChecked() {
    checkData.value = {}
  },
  getChecked() {
    return Object.values(checkData.value).filter(it => it)
  }
})
</script>
