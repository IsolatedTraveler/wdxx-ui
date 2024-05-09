<template>
  <z-article :data="menu" :coms="com"></z-article>
</template>

<script lang="ts" setup>
import { menu } from "./data/menu"
const com = import.meta.glob('./module/**/*.vue')
defineOptions({
  name: 'kfwd-rule'
});
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