<template>
  <div class="html">
    <z-form v-model="formData" flex="row" wrap :labelSize="5">
      <z-form-item label="类型：" basis="25%">
        <z-select name="type" :data="Lx"></z-select>
      </z-form-item>
      <z-form-item label="功能：" basis="25%">
        <z-input name="gn"></z-input>
      </z-form-item>
      <z-form-item label="描述：" basis="50%">
        <z-input name="desc"></z-input>
      </z-form-item>
      <z-form-item label="发版地区：" basis="25%">
        <z-select name="fbdq" :data="fbdq"></z-select>
      </z-form-item>
      <z-form-item label="详细描述：" basis="75%">
        <z-input name="detail"></z-input>
      </z-form-item>
    </z-form>
    <seMarkdown :data="content"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import {
  seMarkdown,
  getMarkDownTitle,
  getMarkDownCode,
} from "@/components/base";
import { computed, inject } from "vue";
import { Lx } from "@/views/kfwd/views/git/module/commit/use.arr";
import { useCommit } from "@/views/kfwd/views/git/module/commit/use";
import { magicPost } from "@/api";
import { fbdqObj, fbdq } from "@/views/gswd/views/publish/data";
defineOptions({
  name: "v-html",
});
const props: any = {},
  { formData, code } = useCommit(),
  content = computed(() => {
    const { bbh } = props,
      { fbdq } = formData.value,
      fwObj = fbdqObj[fbdq] || {};
    return [
      getMarkDownTitle("前端代码", 1),
      "前端修改代码标准化提交，方便后续版本信息维护。",
      getMarkDownTitle("节点提交", 2),
      getMarkDownCode("git checkout " + bbh, "bash"),
      getMarkDownCode(
        [code.value[2].code, "git push origin " + bbh].join("\n"),
        "bash"
      ),
      getMarkDownTitle("归版（发版时合并至主程序）", 2),
      getMarkDownCode(["git checkout ", "git merge " + bbh].join("\n"), "bash"),
      getMarkDownTitle("终版（完全发版时合并至主程序）", 2),
      getMarkDownCode(
        [
          "git checkout " + fwObj.qh,
          "git merge " + bbh,
          "git branch -d " + bbh,
          "git push --delete origin " + bbh,
        ].join("\n"),
        "bash"
      ),
      getMarkDownTitle("备注", 2),
      "发布前先备份历史数据",
    ].join("\n");
  });
formData.value.gn = props.ms;
magicPost("/242/magic/BB01/s-bbfbjl", { id: props.id }).then(
  ({ data: { list } }) => {
    formData.value.fbdq = list?.[0]?.fbdq;
  }
);
</script>
<style lang="scss">
.html {
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
}
</style>
