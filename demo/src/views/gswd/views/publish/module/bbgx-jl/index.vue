<template>
  <div class="publish-bbgx-jl z-col">
    <z-btn-group>
      <z-btn state="primary">初始化</z-btn>
      <z-btn state="success">发布版本</z-btn>
    </z-btn-group>
    <z-table :data="data" :cols="cols"></z-table>
    <z-table :data="mxData" :cols="mxCols"></z-table>
  </div>
</template>
<script lang="ts" setup>
import useBBgx from './use'
defineOptions({
  name: 'publish-bbgx-jl'
})
const { data, cols, mxCols, mxData } = useBBgx()
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
