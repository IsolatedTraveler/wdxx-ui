<template>
  <div class="jtmisToMagic z-col">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="来源：" basis="25%">
        <z-select name="ly" :data="ly"></z-select>
      </z-form-item>
      <z-upload v-model:obj="code" multi type="content">上传</z-upload>
    </z-form>
    <div class="z-auto z-col content">
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

  .z-auto.content {
    flex-grow: 1;
    flex-basis: 0;
    overflow: hidden;
  }

  .z-code-auto {
    overflow: auto;
    flex: unset;
    max-height: 33%;

    +.z-code-auto {
      margin-top: .5em;
    }

    &:last-child {
      flex-basis: 0;
      flex-shrink: 0;
      flex-grow: 1;
      max-height: unset;
    }
  }
}
</style>
