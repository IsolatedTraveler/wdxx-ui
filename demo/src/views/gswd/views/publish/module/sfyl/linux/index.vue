<template>
  <seMarkdown class="tool" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import content from "./data";
import { seMarkdown } from "@/components/base";
defineOptions({
  name: "sfyl-linux",
});
</script>
<style lang="scss">
.sfyl-linux {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
