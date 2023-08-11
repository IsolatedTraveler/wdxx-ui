<template>
  <div class="element-btn-mod">
    <z-btn :shape="shape" :size="size" :disabled="disabled" state="">{{ text }}</z-btn>
    <z-btn :shape="shape" :size="size" :disabled="disabled" state="primary">主要按钮</z-btn>
    <z-btn :shape="shape" :size="size" :disabled="disabled" state="success">成功按钮</z-btn>
    <z-btn :shape="shape" :size="size" :disabled="disabled" state="warning">警告按钮</z-btn>
    <z-btn :shape="shape" :size="size" :disabled="disabled" state="danger">危险按钮</z-btn>
    <z-btn :shape="shape" :size="size" :disabled="disabled" state="info">信息按钮</z-btn>
  </div>
</template>
<script lang="ts">

export default {
  name: 'element-btn-mod',
  props: {
    shape: String,
    text: String,
    size: String,
    disabled: Boolean
  }
}
</script>
<style lang="scss">
.element-btn-mod {}
</style>
