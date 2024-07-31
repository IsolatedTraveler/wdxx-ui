<template>
  <seMarkdown class="sfyl" :data="content"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from "./data";
defineOptions({
  name: "bbgx-gb",
});
</script>
<style lang="scss" scoped>
.bbgx-gb {
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
</style>
