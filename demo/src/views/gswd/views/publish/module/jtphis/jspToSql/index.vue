<template>
  <div class="jtphis">
    <seMarkdown class="fbxt" :data="content"></seMarkdown>
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="jsp代码：" basis="100%">
        <textarea v-model="formData.dm" style="flex-grow: 1;" rows="4" ></textarea>
      </z-form-item>
      <z-form-item label="服务器：" basis="25%">
        <z-select name="fwq" :data="fwq"></z-select>
      </z-form-item>
      <z-form-item label="模块编号：" basis="25%">
        <z-input name="mkbh"></z-input>
      </z-form-item>
      <z-btn @click="getCode">生成</z-btn>
    </z-form>
    <seMarkdown class="annotation" :data="code"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { fwq } from "../../../data";
import {seMarkdown} from '@/components/base';
import content from './data';
import {use} from './use';
defineOptions({
  name: 'sqldy'
});

const {code, formData, getCode} = use();
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
