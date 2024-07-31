<template>
  <seMarkdown class="annotation" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
defineOptions({
  name: 'v-annotation'
})

</script>
<style lang="scss">
.annotation {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
