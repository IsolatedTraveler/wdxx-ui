<template>
  <seMarkdown class="naming-convention-currency" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
defineOptions({
  name: 'naming-convention-currency'
})

</script>
<style lang="scss">
.naming-convention-currency {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
