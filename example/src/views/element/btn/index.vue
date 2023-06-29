<template>
  <div class="element-btn">
    <element-btn-mod text="正常默认按钮" />
    <element-btn-mod text="正常简洁按钮" shape="ghost" />
    <element-btn-mod text="正常文字按钮" shape="text" />
    <element-btn-mod text="禁用默认按钮" disabled />
    <element-btn-mod text="禁用简洁按钮" shape="ghost" disabled />
    <element-btn-mod text="禁用文字按钮" shape="text" disabled />
    <element-btn-mod text="小型默认按钮" size="sm" />
    <element-btn-mod text="大型默认按钮" size="lg" />
    <div>
      <z-btn state="primary" radius="round">round</z-btn>
      <z-btn state="primary" radius="circle">circle</z-btn>
      <z-btn state="primary" radius="ellipse">ellipse</z-btn>
      <z-btn state="primary" radius="none">none</z-btn>
      <z-btn state="primary" radius="5px">5px</z-btn>
      <z-btn state="primary" radius="8">8</z-btn>
      <z-btn state="primary" radius="1em">1em</z-btn>
    </div>
    <z-btn-group>
      <z-btn size="lg" state="success" col="center">success</z-btn>
      <z-btn shape="ghost" size="lg" state="warning">warning</z-btn>
    </z-btn-group>
    <z-btn-group shape="tight">
      <z-btn size="lg" state="success">success</z-btn>
      <z-btn size="lg" state="warning">warning</z-btn>
      <z-btn shape="ghost" size="lg" state="danger">danger</z-btn>
    </z-btn-group>
    <z-btn-group shape="auto">
      <z-btn size="lg" state="success">success</z-btn>
      <z-btn size="md" state="warning">warning</z-btn>
    </z-btn-group>
  </div>
</template>
<script lang="ts">
import elementBtnMod from './btnMod.vue'
export default {
  name: 'element-btn',
  components: {
    elementBtnMod
  }
}
</script>
<style lang="scss">
.element-btn {
  div {
    margin-bottom: .12rem;
  }
}
</style>