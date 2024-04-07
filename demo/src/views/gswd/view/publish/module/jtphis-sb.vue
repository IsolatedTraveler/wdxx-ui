<template>
  <div class="jtphis-sb">
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="数据库地址：" basis="25%">
        <z-input name="dbUrl"></z-input>
      </z-form-item>
      <z-form-item label="数据库账号：" basis="25%">
        <z-input name="dbName"></z-input>
      </z-form-item>
      <z-form-item label="数据库密码：" basis="25%">
        <z-input name="dbPwd"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useJtphisSb } from '../moduleTs';

defineOptions({
  name: 'jtphis-sb'
})
const { code, formData } = useJtphisSb()
</script>
<style lang="scss">
.jtphis-sb {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
