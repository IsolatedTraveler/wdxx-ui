<template>
  <z-flex flex="row" class="gswd-ywcs">
    <z-tree class="left" :data="menu" :def="def" @checked="changePage"></z-tree>
    <component :is="loadComponent(name)" />
  </z-flex>
</template>

<script lang="ts" setup>
import { useYwcs } from './use-ywcs';
defineOptions({
  name: 'gswd-ywcs'
});
const { menu, name, loadComponent, changePage, def } = useYwcs();
</script>

<style lang="scss">
.gswd-ywcs {
  >.left {
    flex-basis: 10em;
    height: 100%;
    overflow: auto;
    border-right: 1px solid var(--color-border-2);
  }

  >.content {
    height: 100%;
    overflow: auto;
  }

  [scroll] {
    overflow: auto;
  }
}
</style>