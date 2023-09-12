<template>
  <li ref="_ref" :class="_class">
    <div class="">{{ data?.[props.mcAlias || ''] }}</div>
    <ul class="tree-items" v-if="data?.[props.childAlias || '']">
      <z-tree-item v-for="it in data?.[props.childAlias || '']" :data="it"></z-tree-item>
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
const { _ref, _class } = useTreeItem(props, emit)
defineExpose({
  ref: _ref
})
</script>