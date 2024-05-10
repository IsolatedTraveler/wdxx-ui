<template>
  <MdPreview class="markdown" :modelValue="data" />
</template>
<script lang="ts" setup>
import { loadProps } from './markdown';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
defineProps(loadProps)
defineOptions({
  name: 'markdown'
})
</script>
<style lang="scss">
.markdown {
  .default-theme p {
    padding: .5em;
  }
}
</style>
