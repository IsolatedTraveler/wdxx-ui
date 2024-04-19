<template>
  <div class="jtmisToMagic">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="根路径：" basis="25%">
        <z-input name="root"></z-input>
      </z-form-item>
      <z-form-item label="文件名：" basis="25%">
        <z-input name="html"></z-input>
      </z-form-item>
      <z-form-item label="Js文件名：" basis="25%">
        <z-input name="js"></z-input>
      </z-form-item>
    </z-form>
    <div class="z-auto">
      <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
    </div>
  </div>
</template>
<script lang="ts" setup>
import use from './use'
defineOptions({
  name: 'jtmisToMagic'
})
const { code, formData } = use()
</script>
<style lang="scss">
.jtmisToMagic {
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
