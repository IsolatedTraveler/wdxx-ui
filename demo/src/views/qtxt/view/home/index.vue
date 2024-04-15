<template>
  <div>
    <z-table class="col-table" basis="auto" :cols="cols" :data="data">
    </z-table>
  </div>
</template>
<script lang="ts" setup>
import { getTableCol } from '@/views/gswd/view/publish/fun';
import { ref } from 'vue';

defineOptions({
  name: 'col-table'
})
const cols = [
  {
    title: '测试1', fixed: true, child: [
      {
        title: '测试1-1', child: [
          { id: 'col', title: '列名' },
          { id: 'lx', title: '类型' }
        ]
      },
      { title: '测试2' }
    ]
  },
  {
    title: '测试3', child: [
      { title: '测试3-1' },
      { title: '测试3-2' },
      { title: '测试3-3' }
    ]
  },
  { id: 'bz', title: '备注3' },
  { id: 'cs', title: '测试', fixed: 'right' },
],
  data = ref<any[]>([{ col: 'cs', lx: 'varchar', bz: '测试' }])
function getData(bm: string) {
  if (bm) {
    getTableCol(bm).then(res => {
      data.value = res
    })
  }
}
getData('z_xtyh')
defineExpose({
  getData
})
</script>
<style lang="scss">
.col-table {
  width: 500px;
  max-height: 600px;
}
</style>
