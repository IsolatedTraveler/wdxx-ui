<template>
  <div class="git-zhgl">
    <z-form v-model="formData" flex="row" wrap :labelSize="5">
      <z-form-item label="来源：" basis="25%">
        <z-select name="type" :data="Lx" @selected="selectType"></z-select>
      </z-form-item>
      <z-form-item label="账号：" basis="25%">
        <z-input name="name"></z-input>
      </z-form-item>
      <z-form-item label="邮箱：" basis="25%">
        <z-input name="email"></z-input>
      </z-form-item>
      <z-form-item label="url：" basis="25%">
        <z-input name="url"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useCommit } from './use'
import { Lx } from './use.arr'
defineOptions({
  name: 'git-zhgl'
})
const { formData, code, selectType } = useCommit()
</script>
<style lang="scss">
.git-zhgl {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
