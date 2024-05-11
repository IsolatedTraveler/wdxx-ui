<template>
  <div class="tool-function">
    <seMarkdown :data="content"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
// import useType from './use'
defineOptions({
  name: 'tool-function'
})
// const { formData, annotationData, annotationName, text } = useType()
</script>
<style lang="scss" scoped>
.tool-function {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
