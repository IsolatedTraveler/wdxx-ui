<template>
  <z-table class="col-table" basis="auto" :cols="cols" :data="data" :value="modelValue" @update:modelValue="setVal">
  </z-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { colTableEmits, colTableProps } from './col-table'
import { getTableCol } from '../../../publish/fun';
import { EventUpdate } from '@ui/vars';
defineProps(colTableProps)
var emits = defineEmits(colTableEmits)
defineOptions({
  name: 'col-table'
})
const cols = [
  { type: 'check' },
  { id: 'col', title: '列名' },
  { id: 'lx', title: '类型' },
  { id: 'bz', title: '备注' }
],
  data = ref<any[]>([])
function getData(bm: string) {
  if (bm) {
    getTableCol(bm).then(res => {
      data.value = res
      // 开发完成后注释
      setVal(res.filter(({ col }) => {
        return /(mm_cjsj|mm_yxq|mm_cscs|zh_sdsj|zh_sdsx|mm_gzdm|mm_cwcs|mm_cwsj)/i.test(col)
      }))
    })
  }
}
function setVal(v: any) {
  emits(EventUpdate, v)
}
defineExpose({
  getData
})
</script>
<style lang="scss">
.col-table {
  width: 100%;
  max-height: 30%;
}
</style>
