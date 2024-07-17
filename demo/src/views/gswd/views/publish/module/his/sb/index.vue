<template>
  <div class="his-sb">
    <z-form v-model="formData" flex="row" wrap :labelSize="6">
      <z-form-item label="版本来源：" basis="25%">
        <z-select name="bbly" :data="fbdq" readonly></z-select>
      </z-form-item>
      <z-form-item label="发版地区：" basis="25%">
        <z-select name="fbdq" :data="fbdq" readonly></z-select>
      </z-form-item>
      <z-form-item label="发版系统：" basis="25%">
        <z-select name="fbxt" :data="fbxt" readonly></z-select>
      </z-form-item>
    </z-form>
    <z-code
      v-for="(it, i) in code"
      :key="i"
      :data="it.code"
      :type="it.lx"
    ></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useHisSb } from "../../../moduleTs";
defineOptions({
  name: "his-sb",
});
const { code, formData, fbdq, fbxt } = useHisSb();
</script>
<style lang="scss">
.his-sb {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
