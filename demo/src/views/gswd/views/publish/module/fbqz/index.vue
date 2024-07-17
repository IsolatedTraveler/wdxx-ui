<template>
  <seMarkdown class="fbqz" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from "./data";
defineOptions({
  name: "v-fbqz",
});
</script>
<style lang="scss" scoped>
.fbqz {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
