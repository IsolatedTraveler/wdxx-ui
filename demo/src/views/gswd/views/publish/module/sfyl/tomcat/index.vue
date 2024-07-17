<template>
  <div class="publish-tomcat">
    <seMarkdown class="tool" :data="content"></seMarkdown>
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="别名：" basis="25%">
        <z-input name="lx"></z-input>
      </z-form-item>
      <z-form-item label="位置：" basis="25%">
        <z-input name="lj"></z-input>
      </z-form-item>
    </z-form>
    <seMarkdown class="tool" v-for="it in code" :data="it"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { useTomcat } from "../../../moduleTs";
import content from "./data";
import { seMarkdown } from "@/components/base";
defineOptions({
  name: "publish-tomcat",
});
const { code, formData } = useTomcat();
</script>
<style lang="scss">
.publish-tomcat {
  overflow: auto;
  height: 100%;
  flex-grow: 1;
  padding: 1em;
}
</style>
