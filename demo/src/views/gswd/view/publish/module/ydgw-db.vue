<template>
  <div class="ydgw-db">
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { ydgwDb } from '../fun';



defineOptions({
  name: 'ydgw-db'
})
const { code } = ydgwDb()
</script>
<style lang="scss">
.ydgw-db {
  flex-basis: 0;
  flex-grow: 1;
  overflow: hidden;

  .z-code {
    width: 100%;
  }
}
</style>
