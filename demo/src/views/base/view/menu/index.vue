<template>
  <z-flex class="base-menu">
    <z-tree @checked="changePage"></z-tree>
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="tabUrl">
        <component :is="Component" v-show="!ifrUrl" :key="route.name" class="router" />
      </keep-alive>
    </router-view>
  </z-flex>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-menu',
  data() {
    return {
      tabUrl: [],
      ifrUrl: ''
    }
  },
  methods: {
    changePage() {

    }
  }
})
</script>
<style lang="scss">
.base-menu {
  width: 100%;
  height: 100%;

  >.router {
    flex-grow: 1;
    height: 100%;
  }
}
</style>