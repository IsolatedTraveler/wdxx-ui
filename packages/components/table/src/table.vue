<template>
  <div ref="_ref" :class="_class" :data-reload="reload">
    <!-- 获取最大固定高度 -->
    <div :class="_main_class">
      <!-- 获取table当前高度 -->
      <div :class="_body_class">
        <table>
          <colgroup>
            <slot></slot>
          </colgroup>
          <thead ref="_el_thead">
            <tr v-for="(tr, i) in ths" :key="i">
              <th v-for="th in tr" :key="th.value.id" v-show="th.value.show" :id="th.value.id"
                :style="(th.value.posStyle)"
                :colspan="(th.value.colspan) || 1"
                :rowspan="(th.value.rowspan) || 1"
                 >
                 <div :style="th.value.style">
                  {{th.value.label}}
                 </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td v-for="col in cols" :key="col.value.id" v-show="col.value.show"
                :style="(col.value.posStyle)">
                {{ col.value.name }}
              </td>
            </tr>
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
const {_ref, _class, _main_class, _body_class, _el_thead, ths, cols, reload} = useTable(props, emit)
const page = props.page ? {} : false
defineExpose({
  ref: _ref
})
</script>
