<template>
  <z-flex flex="row" class="use-publish">
    <z-tree class="left"></z-tree>
    <z-flex></z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { usePublish } from './use-publish';

defineOptions({
  name: 'gswd-publish'
})
const { } = usePublish()
</script>
<style lang="scss">
.use-publish {
  >.left {
    flex-basis: 10em;
    height: 100%;
    overflow: auto;
    border-right: 1px solid var(--color-border-2);
  }
}
</style>