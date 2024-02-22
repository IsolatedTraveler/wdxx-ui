<template>
  <z-flex flex="col" class="element-flex">
    <z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
      <z-flex col auto="3" align="center">auto:3</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="4" align="center" order="1">auto:4</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
    </z-flex>
    <z-flex>
      <z-flex v-for="i in 30" col auto="1" :key="i" align="center">auto:1</z-flex>
    </z-flex>
    <z-flex>
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

  >.z-col,
  .z-row {
    width: 100%;
  }

  .z-row {
    border-left: 1px solid var(--color-border-2);

    &:first-child {
      border-top: 1px solid var(--color-border-2);
    }
  }


  .z-col {
    border-right: 1px solid var(--color-border-2);
    border-bottom: 1px solid var(--color-border-2);
  }
}
</style>
