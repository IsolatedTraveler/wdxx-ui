<template>
  <div ref="_ref" :class="_class">
    <!-- 获取最大固定高度 -->
    <div :class="main_class">
      <!-- 获取table当前高度 -->
      <div>
        <table></table>
        <div></div>
      </div>
    </div>
    <z-page v-if="page" :="page"/>
  </div>
</template>
<script lang="ts" setup>
import { tableEmits, tableProps } from './table'
import { useTable } from './use-table'
import {ZPage} from '@ui/components/page'
defineOptions({
  name: 'z-table'
})
const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const {_ref, _class} = useTable(props, emit)
const main_class = ''
const page = props.page ? {} : false
defineExpose({
  ref: _ref
})
</script>