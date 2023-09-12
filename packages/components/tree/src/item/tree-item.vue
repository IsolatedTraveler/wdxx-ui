<template>
  <li ref="_ref" :class="_class">
    <div class="">{{ mc }}</div>
    <ul class="tree-items" v-if="child">
      <z-tree-item v-for="it in child" :data="it" :key="it?.[idAlias]"></z-tree-item>
    </ul>
  </li>
</template>
<script lang="ts" setup>
import { treeItemEmits, treeItemProps } from './tree-item'
import { useTreeItem } from './use-tree-item'
defineOptions({
  name: 'z-tree-item'
})
const props = defineProps(treeItemProps)
const emit = defineEmits(treeItemEmits)
const { _ref, _class, mc, child, idAlias } = useTreeItem(props, emit)
defineExpose({
  ref: _ref
})
</script>