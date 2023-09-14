<template>
  <li ref="_ref" :class="_class">
    <div class="">
      <slot :data="data">{{ mc }}</slot>
      <slot v-for="it in cols" :name="it.id" :data="data"></slot>
    </div>
    <ul class="tree-items" v-if="child">
      <z-tree-item v-for="it in child" :data="it" :key="it?.[idAlias]">
        <template #default="{ data }">
          <slot :data="data"></slot>
        </template>
        <template v-for="it in cols" v-if="it.type == 'temp'" #[it.id]="{ data }">
          <slot :name="it.id" :data="data"></slot>
        </template>
      </z-tree-item>
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
const { _ref, _class, mc, child, idAlias, cols } = useTreeItem(props, emit)
defineExpose({
  ref: _ref
})
</script>