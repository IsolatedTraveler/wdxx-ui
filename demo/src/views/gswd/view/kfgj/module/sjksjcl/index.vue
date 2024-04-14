<template>
  <z-flex flex="col" class="gswd-kfgj-sjksjcl" auto="1">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="表名：" basis="25%">
        <z-input name="bm"></z-input>
      </z-form-item>
      <z-btn @click="getTabCol">获取表结构</z-btn>
    </z-form>
    <col-table ref="_table"></col-table>
    <z-flex auto="1"></z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import colTable from './col-table.vue'
import { useSjksjcl } from './use-sjksjcl'
defineOptions({
  name: 'gswd-kfgj-sjksjcl'
})
const { formData, getTabCol, _table } = useSjksjcl()
</script>
<style lang="scss">
.gswd-kfgj-sjksjcl {
  flex-basis: 0;
  flex-grow: 1;
  padding: .5em;

  .z-form {
    width: 100%;
  }
}
</style>
