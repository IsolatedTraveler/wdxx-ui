<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { treeEmits, treeProps } from './tree'
import { useTree } from './use-tree'
defineOptions({
  name: 'z-tree'
})
const props = defineProps(treeProps)
const emit = defineEmits(treeEmits)
const {_ref, _class} = useTree(props, emit)
defineExpose({
  ref: _ref
})
</script>