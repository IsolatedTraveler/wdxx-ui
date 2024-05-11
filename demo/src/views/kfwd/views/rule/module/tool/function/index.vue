<template>
  <div class="tool-function">
    <seMarkdown :data="content"></seMarkdown>
    <seMarkdown data="**基础信息**"></seMarkdown>
    <z-form v-model="formData" flex="row" wrap>
      <z-form-item label="函数名：" basis="25%">
        <z-input name="name"></z-input>
      </z-form-item>
      <z-form-item label="功能描述：" basis="25%">
        <z-input name="desc"></z-input>
      </z-form-item>
      <z-form-item label="参数：" basis="25%">
        <z-input name="val"></z-input>
      </z-form-item>
      <z-form-item label="分割字符：" basis="25%">
        <z-input name="split"></z-input>
      </z-form-item>
      <z-btn state="primary" @click="getAnnotationName">生成可选参数</z-btn>
      <z-btn state="success" @click="getText">生成代码</z-btn>
    </z-form>
    <seMarkdown data="**参数注释**"></seMarkdown>
    <z-form v-model="annotationData" flex="col" label-size="8">
      <z-form-item label="return：" name="return">
        <z-input name="type" placeholder="返回结果类型"></z-input>
        <z-input name="desc" placeholder="返回结果描述"></z-input>
      </z-form-item>
      <z-form-item v-for="it in annotationName" :label="`${it}：`" :name="it">
        <z-input name="type" placeholder="参数类型"></z-input>
        <z-input name="desc" placeholder="参数描述"></z-input>
        <z-select name="required" placeholder="参数是否必填" :data="[{ id: '0', mc: '否' }, { id: '1', mc: '是' }]"
          def="1"></z-select>
        <z-input name="val" placeholder="参数默认值" v-show="annotationData[it]?.required === '0'"></z-input>
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
  name: 'tool-function'
})
const { formData, annotationData, annotationName, text, getText, getAnnotationName } = useType()
</script>
<style lang="scss" scoped>
.tool-function {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
