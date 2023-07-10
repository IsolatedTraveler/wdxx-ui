<template>
  <z-flex col class="element-flex">
    <z-flex justify="end" align="end" self="end" wrap>
      <z-flex>1</z-flex>
      <z-flex>2</z-flex>
      <z-flex>3</z-flex>
    </z-flex>
    <z-flex>
      <z-flex>4</z-flex>
      <z-flex>5</z-flex>
      <z-flex>6</z-flex>
    </z-flex>
    <z-flex>
      <z-flex>7</z-flex>
      <z-flex>8</z-flex>
      <z-flex>9</z-flex>
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
