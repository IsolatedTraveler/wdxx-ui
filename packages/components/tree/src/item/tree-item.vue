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
    <ul class="tree-child" v-if="child" v-show="judgeExpand">
      <z-tree-item v-for="(it, i) in child" :data="it" :key="it[idAlias]" :index="i" :childIndex="childIndex + 1"
        :pid="pid?.concat(data[idAlias])">
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
import treeCol from "../col/tree-col.vue";
defineOptions({
  name: 'z-tree-item'
})
const props = defineProps(treeItemProps)
const { childIndex = 0 } = props
const { _ref, _class, child, idAlias, typeCols, mc, cols, selected, judgeExpand } = useTreeItem(props)
defineExpose({
  ref: _ref
})
</script>