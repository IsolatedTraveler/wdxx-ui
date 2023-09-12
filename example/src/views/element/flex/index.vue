<template>
  <z-flex col class="element-flex">
    <z-flex justify="end" align="end" self="end" wrap>
      <z-flex col auto="1" align="center">1</z-flex>
      <z-flex col auto="2" align="center">2</z-flex>
      <z-flex col auto="3" align="center">3</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center" span="5">4</z-flex>
      <z-flex col auto="1" align="center">5</z-flex>
      <z-flex col auto="1" align="center">6</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center">7</z-flex>
      <z-flex col auto="2" align="center">8</z-flex>
      <z-flex col auto="2" align="center">9</z-flex>
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

  .z-row {
    margin-top: 5px;
  }

  .z-col:nth-child(2) {
    background-color: aqua;
    color: white;
  }

  .z-col:nth-child(3) {
    background-color: blue;
    color: white;
  }
}
</style>
