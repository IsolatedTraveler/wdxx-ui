<template>
  <z-flex flex="row" class="use-publish">
    <z-tree class="left" :data="menu" def="java"></z-tree>
    <z-flex class="content" flex="col" scroll>
      <component :is="com[name]" />
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { usePublish } from './use-publish';
defineOptions({
  name: 'gswd-publish'
});
const { menu, name, com } = usePublish();
</script>
<style lang="scss">
.use-publish {
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