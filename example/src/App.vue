<script setup lang="ts">
const handleClick = function() {
  console.log(1)
}
</script>

<template>
  <z-btn @click="handleClick" loading flex="row">
  测试78
  </z-btn>
  <z-btn-group>123</z-btn-group>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
