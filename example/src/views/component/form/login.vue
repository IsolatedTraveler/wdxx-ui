<template>
  <z-form :flex="flex">
    <p>登录</p>
    <z-form-item label="用户名">
      <z-input></z-input>
    </z-form-item>
    <z-form-item label="密码">
      <z-input></z-input>
    </z-form-item>
  </z-form>
</template>
<script lang="ts">
import { PropsFlexV } from '@ui/vars';
interface Data {
  flex: PropsFlexV
}
export default {
  name: 'component-form-login',
  data() {
    return {
      flex: 'col'
    } as Data
  },
  methods: {
  }
}
</script>
<style lang="scss">
.component-form-login {}
</style>
