<template>
  <z-article :data="menu" :coms="com"></z-article>
</template>

<script lang="ts" setup>
import { menu } from "./data";
const com = import.meta.glob("./module/**/*.vue");
defineOptions({
  name: "gswd-publish",
});
</script>
