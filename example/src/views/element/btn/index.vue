<template>
  <div class="element-btn">
    <element-btn-mod text="默认按钮"/>
    <element-btn-mod text="简洁按钮" shape="ghost"/>
    <element-btn-mod text="文字按钮" shape="text"/>
    <div>
      <z-btn size="sm" state="">sm</z-btn>
      <z-btn size="sm" state="primary">primary</z-btn>
      <z-btn size="sm" state="success">success</z-btn>
      <z-btn size="sm" state="warning">warning</z-btn>
      <z-btn size="sm" state="danger">danger</z-btn>
      <z-btn size="sm" state="info">info</z-btn>
    </div>
    <div>
      <z-btn size="md" state="">md</z-btn>
      <z-btn size="md" state="primary">primary</z-btn>
      <z-btn size="md" state="success">success</z-btn>
      <z-btn size="md" state="warning">warning</z-btn>
      <z-btn size="md" state="danger">danger</z-btn>
      <z-btn size="md" state="info">info</z-btn>
    </div>
    <div>
      <z-btn shape="ghost" size="lg" state="">lg</z-btn>
      <z-btn shape="ghost" size="lg" state="primary">primary</z-btn>
      <z-btn shape="ghost" size="lg" state="success">success</z-btn>
      <z-btn shape="ghost" size="lg" state="warning">warning</z-btn>
      <z-btn shape="ghost" size="lg" state="danger">danger</z-btn>
      <z-btn shape="ghost" size="lg" state="info">info</z-btn>
    </div>
    <div>
      <z-btn state="primary" radius="round">round</z-btn>
      <z-btn state="primary" radius="circle">circle</z-btn>
      <z-btn state="primary" radius="ellipse">ellipse</z-btn>
      <z-btn state="primary" radius="none">none</z-btn>
      <z-btn state="primary" radius="5px">5px</z-btn>
      <z-btn state="primary" radius="8">8</z-btn>
      <z-btn state="primary" radius="1em">1em</z-btn>
    </div>
    <div>
      <z-btn disabled state="">btn</z-btn>
      <z-btn disabled state="primary">primary</z-btn>
      <z-btn disabled state="success">success</z-btn>
      <z-btn disabled state="warning">warning</z-btn>
      <z-btn disabled state="danger">danger</z-btn>
      <z-btn disabled state="info">info</z-btn>
    </div>
    <div>
      <z-btn disabled shape="ghost" state="">ghost</z-btn>
      <z-btn disabled shape="ghost" state="primary">primary</z-btn>
      <z-btn disabled shape="ghost" state="success">success</z-btn>
      <z-btn disabled shape="ghost" state="warning">warning</z-btn>
      <z-btn disabled shape="ghost" state="danger">danger</z-btn>
      <z-btn disabled shape="ghost" state="info">info</z-btn>
    </div>
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
.element-btn{
  div{
    margin-bottom: .12rem;
  }
}
</style>