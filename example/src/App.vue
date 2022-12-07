<script setup lang="ts">
const handleClick = function() {
  console.log(1)
}
</script>

<template>
  <z-btn @click="handleClick" state="" flex="row">
  def
  </z-btn>
  <z-btn @click="handleClick" state="primary" flex="row">
    primary
  </z-btn>
  <z-btn @click="handleClick" state="success" flex="row">
    success
  </z-btn>
  <z-btn @click="handleClick" state="warning" flex="row">
    warning
  </z-btn>
  <z-btn @click="handleClick" state="danger" flex="row">
    danger
  </z-btn>
  <z-btn @click="handleClick" state="info" flex="row">
    info
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
