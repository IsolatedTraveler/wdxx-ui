<template>
  <div ref="_ref" :class="_class">
    <input type="file">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { uploadEmits, uploadProps } from './upload'
import { useUpload } from './use-upload'
defineOptions({
  name: 'z-upload'
})
const props = defineProps(uploadProps)
const emit = defineEmits(uploadEmits)
const { _ref, _class } = useUpload(props, emit)
defineExpose({
  ref: _ref
})
</script>