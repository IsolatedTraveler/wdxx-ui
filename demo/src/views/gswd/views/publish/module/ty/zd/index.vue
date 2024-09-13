<template>
  <div class="jtphis">
    <seMarkdown :data="title"></seMarkdown>
    <z-form flex="row" wrap v-model="formData" :label-size="5">
      <z-form-item label="信息来源：" basis="25%">
        <z-select name="fwq" :data="fbdq"></z-select>
      </z-form-item>
      <z-form-item label="版本：" basis="25%" :label-size="5">
        <z-input name="bb"></z-input>
      </z-form-item>
      <z-form-item label="字典模块：" basis="25%">
        <z-input name="fldm"></z-input>
      </z-form-item>
      <z-form-item label="序号：" basis="25%" :label-size="5">
        <z-input name="dm"></z-input>
      </z-form-item>
      <z-btn @click="query" state="primary">获取</z-btn>
    </z-form>
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import {fbdq} from '@view/gswd/views/publish/data';
import {use} from './use';
import {seMarkdown} from '@/components/base';
import {title} from './data';
defineOptions({
  name: 'jtphis-xtcs'
});

const {code, formData, query} = use();
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
