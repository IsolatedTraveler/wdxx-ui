<template>
  <div class="z-sql">
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script setup lang="ts">
import useSql from './use-sql'
defineOptions({
  name: 'z-sql'
})
const {code} = useSql()
</script>
<style lang="scss">
.z-sql{
}
</style>
