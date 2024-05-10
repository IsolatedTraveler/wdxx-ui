<template>
  <div class="his_ty_login">
    <z-form v-model="formData" flex="row" wrap labelSize="6">
      <z-form-item label="重试次数" basis="25%">
        <z-input name="cwsx"></z-input>
        分钟
        <z-input name="cwcs"></z-input>
        次
      </z-form-item>
      <z-form-item label="密码有效期：" basis="25%">
        <z-input name="yxq"></z-input>
      </z-form-item>
      <z-form-item label="锁定时长：" basis="25%">
        <z-input name="sdsc"></z-input>
      </z-form-item>
    </z-form>
    <z-code :data="code" type="sql"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';

defineOptions({
  name: 'his_ty_login'
})
const formData = ref({
  cwcs: '',
  cwsx: '',
  sdsc: '',
  yxq: ''
}), code = computed(() => {
  const { yxq, cwcs, cwsx, sdsc } = formData.value
  return `update xtyh set MM_YXQ = ${yxq.trim()}, MM_CSCS='${cwsx.trim()},${cwcs.trim()}', ZH_SDSX = ${sdsc.trim()};\ncommit;`
})
</script>
<style lang="scss">
.his_ty_login {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
