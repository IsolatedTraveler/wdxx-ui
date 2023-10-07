<template>
  <z-flex col class="element-flex">
    <z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="2" align="center">auto:2</z-flex>
      <z-flex col auto="3" align="center">auto:3</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="1" align="center">auto:1</z-flex>
      <z-flex col auto="4" align="center">auto:4</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center" span="5">span:4</z-flex>
      <z-flex col auto="1" align="center">auto:5</z-flex>
      <z-flex col auto="1" align="center">auto:6</z-flex>
    </z-flex>
    <z-flex>
      <z-flex col auto="1" align="center">auto:7</z-flex>
      <z-flex col auto="2" align="center">auto:8</z-flex>
      <z-flex col auto="2" align="center">auto:9</z-flex>
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
    margin-top: 5px;

    .z-row:nth-child(2) {
      background-color: aqua;
      color: white;
    }

    .z-row:nth-child(3) {
      background-color: blue;
      color: white;
    }
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
