<template>
  <li ref="_ref" :class="_class">
    <z-flex class="tree-row" :style="{ paddingLeft: childIndex + 'em' }" @click.stop="selected">
      <div class="tree-col" v-if="cols.length" v-for="col in cols" :key="col.id" :class="'col-' + col.id">
        <slot v-if="col.type == 'temp'" :name="col.id" :data="data"></slot>
        <tree-col v-else-if="col.type" :col="col" :data="data"></tree-col>
        <slot v-else :data="data">{{ mc }}</slot>
      </div>
      <div class="tree-col" v-else>
        <slot :data="data">{{ mc }}</slot>
      </div>
    </z-flex>
    <ul class="tree-child" v-if="child" v-show="isExpand">
      <z-tree-item v-for="(it, i) in child" :data="it" :key="it[idAlias]" :index="i" :childIndex="cIndex"
        :pid="pid?.concat(data[idAlias])" :def="def">
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
import { treeItemProps } from './tree-item'
import { useTreeItem } from './use-tree-item'
import treeCol from "@ui/components/deply/ceil/ceil.vue";
defineOptions({
  name: 'z-tree-item'
})
const props = defineProps(treeItemProps)
const { childIndex = 0 } = props
const cIndex = childIndex + 1
const { _ref, _class, mc, cols, selected, child, idAlias, typeCols } = useTreeItem(props)
defineExpose({
  ref: _ref
})
</script>