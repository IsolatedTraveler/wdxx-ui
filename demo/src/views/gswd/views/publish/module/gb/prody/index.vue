<template>
  <div class="prody">
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
    <seMarkdown class="annotation" v-for="it in codeV" :data="it"></seMarkdown>
  </div>
</template>
<script lang="ts" setup>
import { getMarkDownCode, seMarkdown } from "@/components/base";
import content from "./data";
import { usePrody } from "@/views/gswd/views/publish/moduleTs";
import { fwq } from "@/views/gswd/views/publish/data";
import { computed } from "vue";
const props: any = {};
defineOptions({
  name: "v-prody",
});
const { code, formData, getCode } = usePrody(),
  codeV = computed(() => {
    return code.value.map((it) => getMarkDownCode(it, "sql"));
  });
formData.value.bb = props.bbh;
formData.value.where = "1=1";
</script>
<style lang="scss" scoped>
.prody {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
