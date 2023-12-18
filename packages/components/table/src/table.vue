<template>
  <z-flex col ref="_ref" :class="_class">
    <z-flex auto="1" class="table-body">
      <table v-show="keys.length">
        <colgroup>
          <col />
          <col v-for="td in keys" :style="td._colStyle" :ref="td.id" />
          <col />
        </colgroup>
        <thead>
          <tr v-for="(tr, i) in trs" :key="i">
            <th></th>
            <th v-for="td in tr" :colspan="td._colspan" :rowspan="td._rowspan" :style="td._plugStyle">
              <div :class="td.class">{{
                td.title }}</div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for=" item in data">
            <td></td>
            <td v-for="td in keys" :style="td.colStyle">
              <div :class="td.class">
                <slot v-if="td.type == 'temp'" :name="td.id" :data="item"></slot>
                <td-ceil v-else-if="td.type" :col="td" :data="item"></td-ceil>
                <slot v-else :data="item">{{ item[td.id] }}</slot>
              </div>
              {{ item[td.id] }}
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td :colspan="keys.length"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { tableEmits, tableProps } from './table'
import { useTable } from './use-table'
import tdCeil from "@ui/components/deply/ceil/ceil.vue";
defineOptions({
  name: 'z-table'
})
const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const instance = getCurrentInstance()
const { _ref, _class, trs, keys } = useTable(props, emit, instance)
defineExpose({
  ref: _ref
})
</script>