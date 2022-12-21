<template>
  <div ref="_ref" :class="_class" :data-reload="reload">
    <!-- 获取最大固定高度 -->
    <div :class="_main_class">
      <!-- 获取table当前高度 -->
      <table cellpadding="0" cellspacing="0">
        <colgroup>
          <col style="width: 0;"/>
          <slot></slot>
        </colgroup>
        <thead ref="_el_thead">
          <tr v-for="(tr, i) in ths" :key="i">
            <th class="z-pos-sticky z-pos-sticky-left" style="left: 0"></th>
            <th v-for="th in tr" :key="th.value.id" v-show="th.value.show" :id="th.value.id"
              :class="[th.value.class, th.value.selfClass]"
              :style="{...th.value.posStyle, ...th.value.selfStyle}"
              :colspan="(th.value.colspan) || 1"
              :rowspan="(th.value.rowspan) || 1"
                >
                <td-slot v-if="th.value.type" :type="th.value.type" :checked="checkedAll" @update:checked="checkAll"></td-slot>
                <span v-else :style="th.value.style">
                {{th.value.label}}
                </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="props.data && props.data.length" v-for="(tr, i) in (props.data || [])" :key="props.rowKey ? tr[props.rowKey] : i"
            :class="props.rowCallback?.(tr)">
            <td class="z-pos-sticky z-pos-sticky-left" style="left: 0"></td>
            <td v-for="col in cols" :key="col.value.id" v-show="col.value.show" 
              :class="[col.value.class, col.value.selfClass]"
              :style="{...col.value.posStyle, ...col.value.selfStyle}">
              <td-slot v-if="col.value.body || col.value.type"
                :style="col.value.style"
                :data="tr"
                v-model:checked="checkData[tr[props.rowKey as string]]"
                :type="col.value.type"
                :body="col.value.body"/>
              <span v-else :style="col.value.style">
                {{ tr[col.value.name as string] }}
              </span>
            </td>
          </tr>
          <tr v-else>
            <td :colspan="cols.length + 1"
              :style="{textAlign: 'center', fontSize: '1.2em', lineHeight: '3em', color: 'var(--color-text3)'}">
              <div :style="{
                position: 'absolute',
                left: 0,
                right: 0,
                borderRight: '1px solid #dcdcdc',
                borderLeft: '1px solid #dcdcdc',
                maxWidth: width,
                boxSizing: 'border-box'
              }">未获取到数据</div><span></span>
            </td>
          </tr>
          <tr>
            <td :colspan="cols.length + 1"></td>
          </tr>
        </tbody>
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
import { computed, ref, Ref} from 'vue'
import tdSlot from './td'
import { ObjStr } from '@ui/vars'
defineOptions({
  name: 'z-table'
})
const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const {_ref, _class, _main_class, _el_thead, ths, cols, reload, width} = useTable(props, emit)
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
const checkData: Ref<ObjStr> = ref({})
const checkedAll = computed(() => {
  if (props.data && props.data.length) {
    const data = checkData.value, key = props.rowKey || ''
    return !props.data.filter(it => !data[it[key]]).length
  } else {
    return false
  }
})
function checkAll(judge: boolean) {
  const data = checkData.value, key = props.rowKey || ''
  props.data?.forEach(it => {
    data[it[key]] = judge ? it : null
  })
}
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
