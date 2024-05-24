<template>
  <div class="publish-bbgx-init z-col">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="版本号：" basis="25%">
        <z-input name="bbh"></z-input>
      </z-form-item>
      <z-form-item label="描述：" basis="25%">
        <z-input name="ms"></z-input>
      </z-form-item>
      <z-btn state="primary" left="1em" @click="init">初始化</z-btn>
    </z-form>
    <z-code :data="code" type="bash"></z-code>
  </div>
</template>
<script lang="ts" setup>
import useBBgx from './use'
import { fbdq } from "../../data";
defineOptions({
  name: 'publish-bbgx-init'
})
const { code, formData, init } = useBBgx()
</script>
<style lang="scss" scoped>
.publish-bbgx-init {
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  padding: .5em;

  .z-form {
    width: 100%;
  }
}
</style>
