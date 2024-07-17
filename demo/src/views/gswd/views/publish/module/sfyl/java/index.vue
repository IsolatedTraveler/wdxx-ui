<template>
  <seMarkdown class="tool" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import content from "./data";
import { seMarkdown } from "@/components/base";
defineOptions({
  name: "publish-java",
});
</script>
<style lang="scss">
// .java {}
</style>
