<template>
  <div class="ydgw-db">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="发版地区别名：" basis="25%">
        <z-select name="fbd" :data="fbdq"></z-select>
      </z-form-item>
      <z-form-item label="版本号：" basis="25%">
        <z-input name="bbh"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { ydgwDb } from '../fun';
defineOptions({
  name: 'ydgw-db'
})
const { code, formData, fbdq } = ydgwDb()
</script>
<style lang="scss">
.ydgw-db {
  flex-basis: 0;
  flex-grow: 1;
  overflow: hidden;

  .z-code {
    width: 100%;
  }
}
</style>
