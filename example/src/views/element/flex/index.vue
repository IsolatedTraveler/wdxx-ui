<template>
  <z-flex col class="element-flex">
    <z-flex auto="1">
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
      <z-flex col auto="3" align="center">auto:3</z-flex>
    </z-flex>
    <z-flex auto="1">
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="4" align="center" order="1">auto:4</z-flex>
    </z-flex>
    <z-flex auto="1">
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
    </z-flex>
    <z-flex auto="1">
      <z-flex v-for="i in 30" col auto="1" :key="i" align="center">auto:1</z-flex>
    </z-flex>
    <z-flex auto="1">
      <z-flex col basis="4" align="center">basis:4</z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
    </z-flex>
  </z-flex>
</template>
<script lang="ts">
export default {
  name: 'element-flex'
}
</script>
<style lang="scss">
.element-flex {
  width: 100%;
  height: 100%;
  text-align: center;

  .z-row {
    border-left: 1px solid #dcdcdc;

    &:first-child {
      border-top: 1px solid #dcdcdc;
    }
  }


  .z-col {
    border-right: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
  }
}
</style>
