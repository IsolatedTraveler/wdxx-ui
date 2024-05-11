<template>
  <seMarkdown class="naming-convention" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
defineOptions({
  name: 'naming-convention'
})

</script>
<style lang="scss">
.naming-convention {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
