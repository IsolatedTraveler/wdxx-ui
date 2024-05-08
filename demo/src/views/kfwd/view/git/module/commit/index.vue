<template>
  <div class="git-commit">
    <z-form v-model="formData" flex="row" wrap labelSize="5">
      <z-form-item label="类型：" basis="25%">
        <z-select name="type" :data="Lx"></z-select>
      </z-form-item>
      <z-form-item label="描述：" basis="75%">
        <z-input name="desc"></z-input>
      </z-form-item>
      <z-form-item label="详细描述：" basis="100%">
        <z-input name="detail"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useCommit } from './use'
import { Lx } from './use.arr'
defineOptions({
  name: 'git-commit'
})
const { formData, code } = useCommit()
</script>
<style lang="scss">
.git-commit {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
