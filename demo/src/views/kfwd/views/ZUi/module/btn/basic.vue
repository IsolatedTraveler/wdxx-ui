<template>
  <div class="row">
    <z-btn>正常默认按钮</z-btn>
    <z-btn state="primary">主要按钮</z-btn>
    <z-btn state="success">成功按钮</z-btn>
    <z-btn state="warning">警告按钮</z-btn>
    <z-btn state="danger">危险按钮</z-btn>
    <z-btn state="info">信息按钮</z-btn>
  </div>
  <div class="row">
    <z-btn shape="ghost">正常简洁按钮</z-btn>
    <z-btn shape="ghost" state="primary">主要按钮</z-btn>
    <z-btn shape="ghost" state="success">成功按钮</z-btn>
    <z-btn shape="ghost" state="warning">警告按钮</z-btn>
    <z-btn shape="ghost" state="danger">危险按钮</z-btn>
    <z-btn shape="ghost" state="info">信息按钮</z-btn>
  </div>
  <div class="row">
    <z-btn shape="text">正常文字按钮</z-btn>
    <z-btn shape="text" state="primary">主要按钮</z-btn>
    <z-btn shape="text" state="success">成功按钮</z-btn>
    <z-btn shape="text" state="warning">警告按钮</z-btn>
    <z-btn shape="text" state="danger">危险按钮</z-btn>
    <z-btn shape="text" state="info">信息按钮</z-btn>
  </div>
  <div class="row">
    <z-btn state="primary" radius="round">round</z-btn>
    <z-btn state="primary" radius="circle">circle</z-btn>
    <z-btn state="primary" radius="ellipse">ellipse</z-btn>
    <z-btn state="primary" radius="none">none</z-btn>
    <z-btn state="primary" radius="5px">5px</z-btn>
    <z-btn state="primary" radius="8">8</z-btn>
    <z-btn state="primary" radius=".5em">.5em</z-btn>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'basic'
})
</script>
<style lang="scss" scoped>
.row {
  margin-bottom: 1em;
}
</style>
