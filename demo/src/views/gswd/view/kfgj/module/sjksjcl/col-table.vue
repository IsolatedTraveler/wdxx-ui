<template>
  <z-table class="col-table" auto="1" basis="0" :cols="cols" :data="data">
  </z-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { getTableCol } from '../../../publish/fun';

defineOptions({
  name: 'col-table'
})
const cols = [
  { id: 'col', title: '列名', fixed: true },
  { id: 'bz', title: '备注' },
  { id: 'lx', title: '类型' , fixed: 'right'}
],
  data = ref<any[]>([{col: 'cs',lx: 'varchar', bz: '测试'}])
function getData(bm: string) {
  if (bm) {
    getTableCol(bm).then(res => {
      data.value = res
    })
  }
}
defineExpose({
  getData
})
</script>
<style lang="scss">
.col-table {
  width: 30%;
}
</style>
