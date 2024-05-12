<template>
  <z-flex auto="1" flex="col" class="cwgl-zddb">
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="导入模板：" basis="25%">
        <z-select name="drlx" :data="mb"></z-select>
      </z-form-item>
      <z-form-item label="导出模板：" basis="25%">
        <z-select name="dclx" :data="mb"></z-select>
      </z-form-item>
      <z-btn @click.stop="excelImport">导入</z-btn>
      <z-btn @click.stop="excelExport">导出</z-btn>
    </z-form>
    <h1>过滤条件</h1>
    <z-form v-model="glData" flex="row" wrap :label-size="6">
      <z-form-item v-for="it in cols" :label="it.title" basis="25%">
        <z-select v-if="glArr[it.id]" :data="glArr[it.id]" :name="it.id"></z-select>
        <z-input v-else :name="it.id"></z-input>
      </z-form-item>
    </z-form>
    <z-table v-if="cols.length" :cols="cols" :data="data"></z-table>
  </z-flex>
</template>
<script lang="ts" setup>
import { seUse } from './use';
import { mb, glArr } from './use.arr';
defineOptions({
  name: 'cwgl-zddb'
})
const { _ref, formData,glData, excelImport,excelExport, cols, data } = seUse()
defineExpose({
  _ref
})
</script>
<style lang="scss" scoped>
.cwgl-zddb {
  width: 100%;
  .z-form{
    width: 100%;
  }
  .z-table{
    flex-grow: 1;
    flex-basis: 0;
    width: 100%;
  }
}
</style>
