<template>
  <div class="jtphis-file">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="历史地址：" basis="25%">
        <z-input name="lsdz"></z-input>
      </z-form-item>
      <z-form-item label="现地址：" basis="25%">
        <z-input name="xdz"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';

defineOptions({
  name: 'jtphis-file'
})
const formData = ref({
  lsdz: '/attached',
  xdz: '/'
}), code = computed(() => {
  return [
    { lx: 'sql', code: '' }
    , { lx: 'bash', code: '' }
  ]
})
</script>
<style lang="scss">
.jtphis-file {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
