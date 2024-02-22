<template>
  <z-flex flex="row" class="use-publish">
    <z-tree class="left" :data="menu" def="java"></z-tree>
    <z-flex class="content">
      <Java></Java>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { usePublish } from './use-publish';
import Java from './module/java.vue'
defineOptions({
  name: 'gswd-publish'
})
const { menu } = usePublish()
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
}
</style>