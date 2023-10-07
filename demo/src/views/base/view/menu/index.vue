<template>
  <z-flex class="base-menu" col>
    <div class="xtxx"></div>
    <z-flex auto="1" class="xtxq">
      <z-flex span="10em" wrap class="left">
        <z-tree @checked="changePage"></z-tree>
      </z-flex>
      <z-flex col class="content" auto="1">
        <div class="title"></div>
        <router-view v-slot="{ Component, route }" v-if="lx === 'route'">
          <keep-alive :include="tabUrl">
            <component :is="Component" :key="route.name" class="router" />
          </keep-alive>
        </router-view>
        <iframe :src="url" frameborder="0" v-else-if="lx === 'iframe'"></iframe>
        <z-flex auto="1" class="router" v-else></z-flex>
      </z-flex>
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
      lx: '',
      url: ''
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

    >.content {
      border-left: 1px solid #dcdcdc;

      >.title {
        flex-basis: 2em;
        border-bottom: 1px solid #dcdcdc;
      }

      >.router {
        flex-grow: 1;
        height: 100%;
      }
    }
  }
}
</style>