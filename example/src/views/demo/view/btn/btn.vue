<template>
  <div class="demo-btn">
    <div>
      <z-btn state="">def</z-btn>
      <z-btn state="primary">primary</z-btn>
      <z-btn state="success">success</z-btn>
      <z-btn state="warning">warning</z-btn>
      <z-btn state="danger">danger</z-btn>
      <z-btn state="info">info</z-btn>
    </div>
    <div>
      <z-btn shape="ghost" state="">def</z-btn>
      <z-btn shape="ghost" state="primary">primary</z-btn>
      <z-btn shape="ghost" state="success">success</z-btn>
      <z-btn shape="ghost" state="warning">warning</z-btn>
      <z-btn shape="ghost" state="danger">danger</z-btn>
      <z-btn shape="ghost" state="info">info</z-btn>
    </div>
    <div>
      <z-btn shape="text" state="">def</z-btn>
      <z-btn shape="text" state="primary">primary</z-btn>
      <z-btn shape="text" state="success">success</z-btn>
      <z-btn shape="text" state="warning">warning</z-btn>
      <z-btn shape="text" state="danger">danger</z-btn>
      <z-btn shape="text" state="info">info</z-btn>
    </div>
    <div>
      <z-btn size="sm" state="">def</z-btn>
      <z-btn size="sm" state="primary">primary</z-btn>
      <z-btn size="sm" state="success">success</z-btn>
      <z-btn size="sm" state="warning">warning</z-btn>
      <z-btn size="sm" state="danger">danger</z-btn>
      <z-btn size="sm" state="info">info</z-btn>
    </div>
    <div>
      <z-btn size="md" state="">def</z-btn>
      <z-btn size="md" state="primary">primary</z-btn>
      <z-btn size="md" state="success">success</z-btn>
      <z-btn size="md" state="warning">warning</z-btn>
      <z-btn size="md" state="danger">danger</z-btn>
      <z-btn size="md" state="info">info</z-btn>
    </div>
    <div>
      <z-btn shape="ghost" size="lg" state="">def</z-btn>
      <z-btn shape="ghost" size="lg" state="primary">primary</z-btn>
      <z-btn shape="ghost" size="lg" state="success">success</z-btn>
      <z-btn shape="ghost" size="lg" state="warning">warning</z-btn>
      <z-btn shape="ghost" size="lg" state="danger">danger</z-btn>
      <z-btn shape="ghost" size="lg" state="info">info</z-btn>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'demo-btn',
  data() {
    return {}
  },
  methods: {
  }
}
</script>
<style lang="scss">
.demo-btn{
  div{
    margin-bottom: .12rem;
  }
}
</style>
