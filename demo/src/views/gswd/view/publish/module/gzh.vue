<template>
  <div>
    公众号首次发版
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
    公众号更新
  </div>
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
