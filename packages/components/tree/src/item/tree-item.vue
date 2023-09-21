<template>
  <li ref="_ref" :class="_class">
    <z-flex class="tree-row">
      <tree-col v-if="cols.length" v-for="col in cols" :key="col.id" :class="'col-' + col.id">
        <slot v-if="col.type == 'temp'" :name="col.id" :data="data"></slot>
        <slot v-else-if="!col.type" :data="data">{{ mc }}</slot>
      </tree-col>
      <tree-col v-else>
        <slot :data="data">{{ mc }}</slot>
      </tree-col>
    </z-flex>
    <ul class="tree-child" v-if="child">
      <z-tree-item v-for="it in child" :data="it" :key="it?.[idAlias]">
        <template #default="{ data }">
          <slot :data="data"></slot>
        </template>
        <template v-for="col in typeCols" #[col.id]="{ data }" :key="col.id">
          <slot :name="col.id" :data="data"></slot>
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
const { _ref, _class, child, idAlias, typeCols, mc, cols } = useTreeItem(props, emit)
defineExpose({
  ref: _ref
})
</script>