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
      <z-form-item label="菜单模块：" basis="25%">
        <z-input name="MKDM"></z-input>
      </z-form-item>
      <z-form-item label="序号：" basis="25%" :label-size="5">
        <z-input name="XH"></z-input>
      </z-form-item>
      <z-form-item label="最大序号：" basis="25%" :label-size="5">
        <z-input name="max"></z-input>
      </z-form-item>
      <z-form-item label="参数名：" basis="25%" :label-size="5">
        <z-input name="CSM"></z-input>
      </z-form-item>
      <z-form-item label="参数说明：" basis="25%" v-show="formData.CSM">
        <z-input name="CSSM"></z-input>
      </z-form-item>
      <z-form-item label="参数级别：" basis="25%" v-show="formData.CSM">
        <z-select name="CSJB" :data="xtcsJb"></z-select>
      </z-form-item>
      <z-form-item label="数据类型：" basis="25%" v-show="formData.CSM">
        <z-select
          name="ZYLX"
          :data="xtcsSjlx"
          @selected="selectedZylx"
        ></z-select>
      </z-form-item>
      <z-form-item label="值域范围：" basis="25%" v-show="ZYLX.zyfw">
        <z-input name="ZYFW" :placeholder="ZYLX.zyfw"></z-input>
      </z-form-item>
      <z-form-item
        label="缺省值："
        basis="25%"
        :label-size="5"
        v-show="ZYLX.qsz"
      >
        <z-input name="QSZ" :placeholder="ZYLX.qsz"></z-input>
      </z-form-item>
      <z-btn @click="query" state="primary">获取</z-btn>
      <z-btn @click="getCode" state="success">生成</z-btn>
    </z-form>
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { fbdq, xtcsJb, xtcsSjlx } from "@view/gswd/views/publish/data";
import { use } from "./use";
import { seMarkdown } from "@/components/base";
import { title } from "./data";
defineOptions({
  name: "jtphis-xtcs",
});

const { code, formData, getCode, query, selectedZylx, ZYLX } = use();
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
