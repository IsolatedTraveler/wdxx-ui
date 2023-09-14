<template>
  <li ref="_ref" :class="_class">
    <div class="tree-ceils">
      <div v-for="col in cols" :key="col.id">
        <slot v-if="col.type == 'temp'" :name="col.id" :data="data"></slot>
        <component v-else-if="col.type"></component>
        <span v-else>{{ data?.[col.id] }}</span>
      </div>
      <slot>{{ mc }}</slot>
    </div>
    <ul class="tree-items" v-if="child">
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