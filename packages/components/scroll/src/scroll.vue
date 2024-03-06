<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { scrollEmits, scrollProps } from './scroll'
import { useScroll } from './use-scroll'
defineOptions({
  name: 'z-scroll'
})
const props = defineProps(scrollProps)
const emit = defineEmits(scrollEmits)
const {_ref, _class} = useScroll(props, emit)
defineExpose({
  ref: _ref
})
</script>