<template>
  <ul ref="_ref" :class="_class">
    <z-tree-item v-for="it in data" :data="it" :key="it?.[idAlias]">
      <template #default="{ data }">
        <slot :data="data"></slot>
      </template>
      <template v-for="it in cols" v-if="it.type == 'temp'" #[it.id]="{ data }">
        <slot :name="it.id" :data="data"></slot>
      </template>
    </z-tree-item>
  </ul>
</template>
<script lang="ts" setup>
import { treeEmits, treeProps } from './tree'
import { useTree } from './use-tree'
import ZTreeItem from './item/tree-item.vue'
defineOptions({
  name: 'z-tree'
})
const props = defineProps(treeProps)
const emit = defineEmits(treeEmits)
const { _ref, _class, idAlias } = useTree(props, emit)
defineExpose({
  ref: _ref
})
</script>