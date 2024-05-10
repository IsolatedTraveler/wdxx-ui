<template>
  <div class="jtphis">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="服务器：" basis="25%">
        <z-select name="fwq" :data="fwq"></z-select>
      </z-form-item>
      <z-form-item label="版本：" basis="25%">
        <z-input name="bb"></z-input>
      </z-form-item>
      <z-form-item label="条件：" basis="25%">
        <z-input name="where"></z-input>
      </z-form-item>
      <z-btn @click="getCode">生成</z-btn>
    </z-form>
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useSqldy } from '../moduleTs';
import { fwq } from "../data"
defineOptions({
  name: 'sqldy'
})


const { code, formData, getCode } = useSqldy()
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
