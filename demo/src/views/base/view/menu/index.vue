<template>
  <z-flex>
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="tabUrl">
        <component :is="Component" v-show="!ifrUrl" :key="route.name" class="jt-auto" />
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
  }
})
</script>