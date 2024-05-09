<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { articleEmits, articleProps } from './article'
import { useArticle } from './use-article'
defineOptions({
  name: 'z-article'
})
const props = defineProps(articleProps)
const emit = defineEmits(articleEmits)
const {_ref, _class} = useArticle(props, emit)
defineExpose({
  ref: _ref
})
</script>