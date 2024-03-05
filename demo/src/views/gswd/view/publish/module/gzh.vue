<template>
  <z-flex flex="col">
    公众号首次发版
    <z-form flex="row">
      <z-form-item label="发版地区别名：" basis="25%">
        <z-input></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
    公众号更新
  </z-flex>
</template>

<script lang="ts" setup>
import useGzh from '../data/gzh'
const { code } = useGzh()
defineOptions({
  name: 'publish-gzh'
})
</script>

<style lang="scss">
// .java {}</style>
