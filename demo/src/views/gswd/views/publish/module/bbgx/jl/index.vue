<template>
  <div class="publish-bbgx-jl z-col">
    <z-table :data="data" :cols="cols">
      <template v-slot:_cz="{ data }">
        <z-btn state="primary" size="sm" @click="dtcz('gb', data)">归版</z-btn>
        <z-btn state="success" size="sm" @click="dtcz('publish', data)">发布</z-btn>
      </template>
    </z-table>
    <component v-if="com" :is="com" :="bbxx"></component>
  </div>
</template>
<script lang="ts" setup>
import useBBgx from './use'
defineOptions({
  name: 'publish-bbgx-jl'
})
const { data, cols, dtcz, com, bbxx } = useBBgx()
</script>
<style lang="scss" scoped>
.publish-bbgx-jl {
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  padding: .5em;

  .z-table {
    margin-top: .5em;
  }
}
</style>
