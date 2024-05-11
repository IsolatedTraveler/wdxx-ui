<template>
  <div class="tool-const">
    <seMarkdown :data="content"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
// import useType from './use'
defineOptions({
  name: 'tool-const'
})
// const { formData, annotationData, annotationName, text } = useType()
</script>
<style lang="scss" scoped>
.tool-const {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
