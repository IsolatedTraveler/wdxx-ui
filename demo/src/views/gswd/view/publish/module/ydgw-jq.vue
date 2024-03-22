<template>
  <div class="ydgw-jq">
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { ydgwJq } from '../fun';
defineOptions({
  name: 'ydgw-jq'
})
const { code } = ydgwJq()
</script>
<style lang="scss">
.ydgw-jq {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
