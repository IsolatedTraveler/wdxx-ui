<template>
  <seMarkdown class="sfyl" :data="code"></seMarkdown>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import { getMarkDownTitle, getMarkDownCode } from "@/components/base";
defineOptions({
  name: "fzzx-gx",
});
const code = [
  getMarkDownTitle("共享文件", 3),
  "window 远程机上创建共享文件",
  "本地电脑上创建共享文件对应的映射",
  getMarkDownCode("net use X: \\\\192.168.0.185\\ydgw /user:jtkf "),
].join("\n");
</script>
<style lang="scss">
.fzzx-gx {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
