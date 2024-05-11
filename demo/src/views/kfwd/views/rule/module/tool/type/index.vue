<template>
  <div class="tool-type">
    <seMarkdown :data="content"></seMarkdown>
    <seMarkdown data="**基础信息**"></seMarkdown>
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="类型名：" basis="25%">
        <z-input name="name"></z-input>
      </z-form-item>
      <z-form-item label="类型描述：" basis="25%">
        <z-input name="desc"></z-input>
      </z-form-item>
      <z-form-item label="可选值：" basis="25%">
        <z-input name="val"></z-input>
      </z-form-item>
      <z-form-item label="分割字符：" basis="25%">
        <z-input name="split"></z-input>
      </z-form-item>
      <z-btn state="primary" @click="getAnnotationName">生成可选参数</z-btn>
      <z-btn state="success" @click="getText">生成代码</z-btn>
    </z-form>
    <seMarkdown data="**可选值注释**"></seMarkdown>
    <z-form v-model="annotationData" flex="col">
      <z-form-item v-for="it in annotationName" :label="`${it}：`" :key="it">
        <z-input :name="it"></z-input>
      </z-form-item>
      <z-btn state="success" @click="getText">生成代码</z-btn>
    </z-form>
    <seMarkdown :data="text"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { seMarkdown } from "@/components/base";
import content from './data'
import useType from './use'
defineOptions({
  name: 'tool-type'
})
const { formData, annotationData, annotationName, text, getAnnotationName, getText } = useType()
</script>
<style lang="scss" scoped>
.tool-type {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
