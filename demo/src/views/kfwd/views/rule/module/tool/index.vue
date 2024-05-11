<template>
  <seMarkdown class="tool" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
defineOptions({
  name: 'v-tool'
})

</script>
<style lang="scss" scoped>
.tool {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
