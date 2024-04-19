<template>
  <div ref="_ref" :class="_class">
    <input type="file" ref="_input" @change="fileChange" :multiple="multi">
    <div @click="triggerFileInputClick">
      <slot></slot>
    </div>
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
const { _ref, _class, _input, triggerFileInputClick, fileChange } = useUpload(props, emit)
defineExpose({
  ref: _ref
})
</script>