<template>
  <div ref="_ref" :class="_class" :style="_style">
  </div>
</template>
<script lang="ts" setup>
import { mediaEmits, mediaProps } from './media'
import { useMedia } from './use-media'
defineOptions({
  name: 'z-media'
})
const props = defineProps(mediaProps)
const emit = defineEmits(mediaEmits)
const { _ref, _class, _style } = useMedia(props, emit)
defineExpose({
  ref: _ref
})
</script>