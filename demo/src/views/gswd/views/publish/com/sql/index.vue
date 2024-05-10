<template>
  <z-code type="sql" :data="code"></z-code>
</template>
<script setup lang="ts">
import useSql from './use-sql'
defineOptions({
  name: 'z-sql'
})
const { code } = useSql()
</script>
<style lang="scss">
.z-sql {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
