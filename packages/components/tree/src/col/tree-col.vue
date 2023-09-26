<template>
  <component v-if="col.mc" :is="col.type" v-model="data[col.id]" v-model:mc="data[col.mc]" :="col.props" @click="">
  </component>
  <component v-else :is="col.type" v-model="data[col.id]" :="col.props" @click=""></component>
</template>
<script lang="ts" setup>
import { treeColProps } from './tree-col'
import { useTreeCol } from './use-tree-col'
defineOptions({
  name: 'z-tree-col'
})
const props = defineProps(treeColProps)
const { _ref } = useTreeCol(props)
defineExpose({
  ref: _ref
})
</script>