<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="tabsName">
      <component :is="Component" :key="route.name" class="router" />
    </keep-alive>
  </router-view>
</template>
<script lang="ts" setup>
import { routeEmits, routeProps } from './route';
import useRoute from './use-route';
defineOptions({
  name: 'se-base-route'
})
const props = defineProps(routeProps)
const emit = defineEmits(routeEmits)
const { tabsName } = useRoute(props, emit)
</script>
<style lang="scss">
// .router {}
</style>
