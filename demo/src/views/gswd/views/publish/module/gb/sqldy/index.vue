<template>
  <div class="sqldy">
    <seMarkdown class="annotation" :data="content"></seMarkdown>
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="服务器：" basis="25%">
        <z-select name="fwq" :data="fwq"></z-select>
      </z-form-item>
      <z-form-item label="版本：" basis="25%">
        <z-input name="bb"></z-input>
      </z-form-item>
      <z-form-item label="条件：" basis="25%">
        <z-input name="where"></z-input>
      </z-form-item>
      <z-btn @click="getCode">生成</z-btn>
    </z-form>
    <seMarkdown class="annotation" :data="codeV"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { getMarkDownCode, seMarkdown } from "@/components/base";
import content from "./data";
import { useSqldy } from "@/views/gswd/views/publish/moduleTs";
import { fwq } from "@/views/gswd/views/publish/data";
import { computed, inject } from "vue";
const props: any = {};
defineOptions({
  name: "v-sqldy",
});
const { code, formData, getCode } = useSqldy("sqldy"),
  codeV = computed(() => {
    return getMarkDownCode(code.value, "sql");
  });
formData.value.bb = props.bbh;
formData.value.where = "1=1";
</script>
<style lang="scss" scoped>
.sqldy {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
