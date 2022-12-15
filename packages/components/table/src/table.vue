<template>
  <div ref="_ref" :class="_class">
    <!-- 获取最大固定高度 -->
    <div :class="_main_class">
      <!-- 获取table当前高度 -->
      <div :class="_body_class">
        <table>
          <colgroup>
            <slot></slot>
          </colgroup>
          <thead>
            <tr v-for="(ths, i) in heads" :key="i">
              <th v-for="(th,j) in ths" :key="j">
                {{th}}
              </th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
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
const {_ref, _class, _main_class, _body_class, heads} = useTable(props, emit)
const page = props.page ? {} : false
defineExpose({
  ref: _ref
})
</script>