<template>
  <seMarkdown class="sfyl" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from "./data";
defineOptions({
  name: "v-sfyl",
});
</script>
<style lang="scss" scoped>
.sfyl {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
