<template>
  <seMarkdown class="principle" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
defineOptions({
  name: 'v-principle'
})

</script>
<style lang="scss">
.principle {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
