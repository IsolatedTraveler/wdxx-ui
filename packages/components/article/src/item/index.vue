<template>
  <div ref="_ref" :class="_class" v-if="judge">
    <component class="content" v-if="comV" :is="comV"></component>
  </div>
  <div ref="_ref" :class="_class" v-else></div>
</template>
<script lang="ts" setup>
import { articleItemEmits, articleItemProps } from './item'
import { useArticleItem } from './use'
defineOptions({
  name: 'z-article'
})
const props = defineProps(articleItemProps)
const emit = defineEmits(articleItemEmits)
const { _ref, _class, comV, judge, scroll, show } = useArticleItem(props, emit)
defineExpose({
  ref: _ref,
  scroll,
  judge,
  show
})

</script>