<template>
  <seMarkdown class="fbxt" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from "./data";
defineOptions({
  name: "v-fbxt",
});
</script>
<style lang="scss" scoped>
.fbxt {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
