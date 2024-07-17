<template>
  <div ref="_ref" :class="_class">
    <component class="content" v-if="comV" :is="comV"></component>
    <span v-else
      >【{{ data.mc }}】相关功能目录页面【 {{ data.src }} 】未定义</span
    >
  </div>
</template>
<script lang="ts" setup>
import { articleItemEmits, articleItemProps } from "./item";
import { useArticleItem } from "./use";
defineOptions({
  name: "z-article",
});
const props = defineProps(articleItemProps);
const emit = defineEmits(articleItemEmits);
const { _ref, _class, comV, scroll, show } = useArticleItem(props, emit);
defineExpose({
  ref: _ref,
  scroll,
  show,
});
</script>
