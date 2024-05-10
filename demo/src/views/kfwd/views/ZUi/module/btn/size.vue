<template>
  <div class="row">
    <z-btn size="sm">小型默认按钮</z-btn>
    <z-btn size="sm" state="primary">主要按钮</z-btn>
    <z-btn size="sm" state="success">成功按钮</z-btn>
    <z-btn size="sm" state="warning">警告按钮</z-btn>
    <z-btn size="sm" state="danger">危险按钮</z-btn>
    <z-btn size="sm" state="info">信息按钮</z-btn>
  </div>
  <div class="row">
    <z-btn size="md">默认按钮</z-btn>
    <z-btn size="md" state="primary">主要按钮</z-btn>
    <z-btn size="md" state="success">成功按钮</z-btn>
    <z-btn size="md" state="warning">警告按钮</z-btn>
    <z-btn size="md" state="danger">危险按钮</z-btn>
    <z-btn size="md" state="info">信息按钮</z-btn>
  </div>
  <div class="row">
    <z-btn size="lg">大型默认按钮</z-btn>
    <z-btn size="lg" state="primary">主要按钮</z-btn>
    <z-btn size="lg" state="success">成功按钮</z-btn>
    <z-btn size="lg" state="warning">警告按钮</z-btn>
    <z-btn size="lg" state="danger">危险按钮</z-btn>
    <z-btn size="lg" state="info">信息按钮</z-btn>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'size'
})
</script>
<style lang="scss" scoped>
.row {
  margin-bottom: 1em;
}
</style>
