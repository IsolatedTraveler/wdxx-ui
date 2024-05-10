<template>
  <div class="jtphis">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="版本：" basis="25%">
        <z-input name="bb"></z-input>
      </z-form-item>
      <z-form-item label="条件：" basis="25%">
        <z-input name="where"></z-input>
      </z-form-item>
      <z-btn @click="getCode">生成</z-btn>
    </z-form>
    <z-code type="sql" v-for="(it, i) in code" :key="i" :data="it"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { usePrody } from '../moduleTs';
defineOptions({
  name: 'prody'
})

const { code, formData, getCode } = usePrody()
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
