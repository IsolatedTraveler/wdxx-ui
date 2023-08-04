<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { treeItemEmits, treeItemProps } from './tree-item'
import { useTreeItem } from './use-tree-item'
defineOptions({
  name: 'z-tree-item'
})
const props = defineProps(treeItemProps)
const emit = defineEmits(treeItemEmits)
const {_ref, _class} = useTreeItem(props, emit)
defineExpose({
  ref: _ref
})
</script>