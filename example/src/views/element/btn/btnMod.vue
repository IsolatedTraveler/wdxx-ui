<template>
  <div class="element-btn-mod">
    <z-btn :shape="shape" state="" full>{{ text }}</z-btn>
    <z-btn :shape="shape" state="primary">主要按钮</z-btn>
    <z-btn :shape="shape" state="success">成功按钮</z-btn>
    <z-btn :shape="shape" state="warning">警告按钮</z-btn>
    <z-btn :shape="shape" state="danger">危险按钮</z-btn>
    <z-btn :shape="shape" state="info">信息按钮</z-btn>
  </div>
</template>
<script lang="ts">
export default {
  name: 'element-btn-mod',
  props: {
    shape: String,
    text: String
  }
}
</script>
<style lang="scss">
.element-btn-mod {}
</style>
