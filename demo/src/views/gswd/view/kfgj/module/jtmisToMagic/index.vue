<template>
  <div class="jtmisToMagic z-col">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="来源：" basis="25%">
        <z-select name="ly" :data="ly"></z-select>
      </z-form-item>
      <z-upload v-model:obj="code" multi type="content">上传</z-upload>
    </z-form>
    <div class="z-auto z-col">
      <div class="z-auto z-code-auto" v-for="(it, i) in codeV">
        <z-code :key="i" :data="it.code" :type="it.lx"></z-code>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import use from './use'
defineOptions({
  name: 'jtmisToMagic'
})
const { code, formData, codeV, ly } = use()
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
  }

  .z-code-auto {
    +.z-code-auto {
      margin-top: .5em;
    }
  }
}
</style>
