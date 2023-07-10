<template>
  <z-flex col class="element-flex">
    <z-flex justify="end" align="end" self="end" wrap>
      <z-flex auto="1">1</z-flex>
      <z-flex auto="2">2</z-flex>
      <z-flex auto="3">3</z-flex>
    </z-flex>
    <z-flex>
      <z-flex auto="1">4</z-flex>
      <z-flex auto="1">5</z-flex>
      <z-flex auto="1">6</z-flex>
    </z-flex>
    <z-flex>
      <z-flex auto="1">7</z-flex>
      <z-flex auto="2">8</z-flex>
      <z-flex auto="2">9</z-flex>
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
}
</style>
