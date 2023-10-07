<template>
  <z-flex class="base-menu" col>
    <div class="xtxx"></div>
    <z-flex auto="1" class="xtxq">
      <z-tree @checked="changePage"></z-tree>
      <router-view v-slot="{ Component, route }">
        <keep-alive :include="tabUrl">
          <component :is="Component" v-show="!ifrUrl" :key="route.name" class="router" />
        </keep-alive>
      </router-view>
    </z-flex>
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

  >.xtxx {
    flex-basis: 3em;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
  }

  >.xtxq {
    width: 100%;

    >.router {
      flex-grow: 1;
      height: 100%;
    }
  }
}
</style>