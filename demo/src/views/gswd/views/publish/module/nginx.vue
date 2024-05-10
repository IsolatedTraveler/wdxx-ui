<template>
  <div class="scroll">
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="发版地区：" basis="25%">
        <z-select name="fbd" :data="fbdq"></z-select>
      </z-form-item>
      <z-form-item label="旧版接口：" basis="25%">
        <z-input name="jbjk"></z-input>
      </z-form-item>
      <z-form-item label="magic" basis="25%">
        <z-input name="magic"></z-input>
      </z-form-item>
      <z-form-item label="ureport" basis="25%">
        <z-input name="urpt"></z-input>
      </z-form-item>
      <z-form-item label="minio后台" basis="25%">
        <z-input name="minioWeb"></z-input>
      </z-form-item>
      <z-form-item label="minio接口" basis="25%">
        <z-input name="minio"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>

<script lang="ts" setup>
import { userNginx } from '../moduleTs';
import { fbdq } from "../data"
defineOptions({
  name: 'publish-nginx'
})
const { code, formData } = userNginx()
</script>

<style lang="scss">
.scroll {
  overflow: auto;
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
}
</style>
