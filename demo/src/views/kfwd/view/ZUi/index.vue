<template>
  <z-flex flex="row" class="use-publish">
    <z-tree class="left" :data="menu" v-model="def" @checked="changePage"></z-tree>
    <component class="content" :name="name" :is="loadComponent(name)" />
  </z-flex>
</template>

<script lang="ts" setup>
import { menu } from "./data/menu"
import { usePublish } from '@/views/gswd/view/publish/use-publish';

defineOptions({
  name: 'kfwd-ZUi'
});
const { name, loadComponent, changePage, def } = usePublish(import.meta.glob('./module/*/index.vue'), 'kfwd', 'btn');
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
    overflow: auto;
    padding: .5em;
    height: 100%;
  }
}
</style>