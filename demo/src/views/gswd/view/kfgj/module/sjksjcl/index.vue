<template>
  <z-flex flex="col" class="gswd-kfgj-sjksjcl" auto="1">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="表名：" basis="25%">
        <z-input name="bm"></z-input>
      </z-form-item>
      <z-btn @click="getTabCol">获取表结构</z-btn>
      <z-btn @click="ExeFun('getVar')">生成变量</z-btn>
      <z-btn @click="ExeFun('setVar')">变量赋值</z-btn>
      <z-btn @click="ExeFun('setSelectVar')">变量查询赋值</z-btn>
      <z-btn @click="ExeFun('update')">更新表格</z-btn>
      <z-btn @click="ExeFun('insert')">插入表格</z-btn>
    </z-form>
    <col-table ref="_table" v-model="tableData"></col-table>
    <div class="z-auto">
      <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
    </div>
  </z-flex>
</template>
<script lang="ts" setup>
import colTable from './col-table.vue'
import { useSjksjcl } from './use-sjksjcl'
defineOptions({
  name: 'gswd-kfgj-sjksjcl'
})
const { formData, getTabCol, _table, ExeFun, tableData, code } = useSjksjcl()
</script>
<style lang="scss">
.gswd-kfgj-sjksjcl {
  flex-basis: 0;
  flex-grow: 1;
  padding: .5em;

  .z-form {
    width: 100%;
  }

  .z-auto {
    flex-basis: 0;
    flex-grow: 1;
    overflow: auto;
    padding-top: 1em;
  }
}
</style>
