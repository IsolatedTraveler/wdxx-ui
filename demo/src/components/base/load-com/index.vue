<template>
  <z-flex flex="row" class="load-com">
    <z-tree class="left" :data="data" v-model="modelValue"></z-tree>
    <component class="content" :is="loadComponent()" />
  </z-flex>
</template>
<script lang="ts" setup>
import { loadProps, loadEmits } from './load';
import { useLoad } from './use-load';
defineOptions({
  name: 'load-com'
})
const props = defineProps(loadProps)
const emit = defineEmits(loadEmits)
const { loadComponent } = useLoad(props, emit)
</script>
<style lang="scss">
.load-com {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
