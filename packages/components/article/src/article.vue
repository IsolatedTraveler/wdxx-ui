<template>
  <div ref="_ref" :class="_class">
    <z-tree
      class="left"
      :data="data"
      :model-value="val"
      @checked="selected"
    ></z-tree>
    <div class="z-article-content" ref="_content">
      <article-item
        v-for="(it, i) in data"
        :key="it.id"
        :data="it"
        :com="coms[it.src]"
        v-model:index="index"
        :ref="(el) => setRef(el, i)"
        :disabled="diabledScroll"
        :next="loadNext"
        :height="height"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { articleEmits, articleProps } from "./article";
import { useArticle } from "./use-article";
import articleItem from "./item/index.vue";
defineOptions({
  name: "z-article",
});
const props = defineProps(articleProps);
const emit = defineEmits(articleEmits);
const {
  _ref,
  _class,
  val,
  index,
  data,
  selected,
  setRef,
  _content,
  diabledScroll,
  loadNext,
  height,
} = useArticle(props, emit);
defineExpose({
  ref: _ref,
});
</script>
