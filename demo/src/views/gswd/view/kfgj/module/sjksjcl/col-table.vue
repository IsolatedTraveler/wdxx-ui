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
  {
    title: '测试3', fixed: true, child: [
      {
        title: '测2', fixed: true, child: [
          { id: 'col', title: '列名' },
          { id: 'lx', title: '类型' }
        ]
      },
      { title: '测试1' }
    ]
  },
  { id: 'bz', title: '备注' }
],
  data = ref<any[]>([{ col: 'cs', lx: 'varchar', bz: '测试' }])
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
  width: 40%;
  max-height: 30%;
}
</style>
