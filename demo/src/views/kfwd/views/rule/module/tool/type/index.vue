<template>
  <div class="annotation">
    <seMarkdown :data="content"></seMarkdown>
    <seMarkdown data="**基础信息**"></seMarkdown>
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="类型名：" basis="25%">
        <z-input name="name"></z-input>
      </z-form-item>
      <z-form-item label="可选值：" basis="25%">
        <z-input name="val"></z-input>
      </z-form-item>
      <z-form-item label="分割字符：" basis="25%">
        <z-input name="split"></z-input>
      </z-form-item>
    </z-form>
    <seMarkdown data="**可选值注释**"></seMarkdown>
    <z-form v-model="annotationData" flex="col">
      <z-form-item v-for="it in annotationName" :label="`${it}：`">
        <z-input :name="it"></z-input>
      </z-form-item>
    </z-form>
    <seMarkdown :data="text"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
import useType from './use'
defineOptions({
  name: 'v-annotation'
})
const { formData, annotationData, annotationName, text } = useType()
</script>
<style lang="scss" scoped>
.annotation {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
