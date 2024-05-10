<template>
  <seMarkdown class="rule-mmgz" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
defineOptions({
  name: 'rule-mmgz'
})

</script>
<style lang="scss">
.rule-mmgz {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
