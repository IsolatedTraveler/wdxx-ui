<template>
  <div ref="_ref" :class="_class">
    <z-tree class="left" :data="data" v-model="val" @checked="selected"></z-tree>
    <div class="z-article-content">
      <article-item v-for="(it,i) in data"  :data="it" :com="coms[it.id]" v-model="val" v-model:index="index" :ref="(el) => setRef(el, i)" :disabled="judge" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { articleEmits, articleProps } from './article'
import { useArticle } from './use-article'
import articleItem from './item/index.vue'
defineOptions({
  name: 'z-article'
})
const props = defineProps(articleProps)
const emit = defineEmits(articleEmits)
const {_ref, _class, val,index,data,selected,setRef, judge} = useArticle(props, emit)
defineExpose({
  ref: _ref
})
</script>