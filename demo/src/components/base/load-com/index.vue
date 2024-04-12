<template>
  <z-flex flex="row" class="load-com">
    <z-tree class="left" :data="data" v-model="val" @checked="checked"></z-tree>
    <component class="content" :is="com">
      <p v-if="err">{{ err }}</p>
    </component>
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
const { com, val, checked, err } = useLoad(props, emit)
</script>
<style lang="scss">
.load-com {
  flex-basis: 0;
  flex-grow: 1;

  >.left {
    flex-basis: 10em;
    height: 100%;
    overflow: auto;
    border-right: 1px solid var(--color-border-2);
  }

  >.content {
    overflow: auto;
    padding-bottom: 1em;
    height: 100%;
  }
}
</style>
