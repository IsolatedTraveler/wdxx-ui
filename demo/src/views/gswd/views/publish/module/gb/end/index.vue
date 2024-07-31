<template>
  <div>
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
    <seMarkdown class="end" :data="content"></seMarkdown>
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
import { fbdqObj, fbdq } from "@/views/gswd/views/publish/data";
import { magicPost } from "@/api";
defineOptions({
  name: "v-end",
});
const props: any = {},
  { formData, code } = useCommit(),
  content = computed(() => {
    const { bbh } = props,
      { fbdq } = formData.value;
    return [
      getMarkDownTitle("合并备份", 1),
      "合并操作",
      getMarkDownCode(
        [
          "git checkout " + bbh,
          code.value[2].code,
          "git checkout " + fbdqObj[fbdq]?.qh,
          "git merge " + bbh,
        ].join("\n"),
        "bash"
      ),
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
.end {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
