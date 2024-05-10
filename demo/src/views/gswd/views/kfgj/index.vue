<template>
  <se-base-load-com :data="menu" :com="com" ly="gswdKfgj" class="gswd-kfgj" />
</template>

<script lang="ts" setup>
import { seBaseLoadCom } from "@/components/base";
import { menu } from "./data"
const com = import.meta.glob('./module/**/*.vue')
defineOptions({
  name: 'gswd-kfgj'
});
</script>
