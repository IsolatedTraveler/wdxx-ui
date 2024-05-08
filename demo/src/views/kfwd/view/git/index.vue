<template>
  <se-base-load-com :data="menu" :com="com" ly="kfwdZui" :def="menuDef" />
</template>

<script lang="ts" setup>
import { menu, menuDef } from "./data/menu"
import { seBaseLoadCom } from "@/components/base";
const com = import.meta.glob('./module/**/*.vue')
defineOptions({
  name: 'kfwd-git'
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