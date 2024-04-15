<template>
  <z-table class="col-table" basis="auto" :cols="cols" :data="data">
  </z-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { getTableCol } from '../../../publish/fun';

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
    })
  }
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
