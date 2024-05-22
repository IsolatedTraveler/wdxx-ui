<template>
  <div class="jtphis_dzfp">
    <z-form flex="row" wrap v-model="formData" :label-size="6">
      <z-form-item label="服务器：" basis="25%">
        <z-select name="fwq" :data="fwq"></z-select>
      </z-form-item>
      <z-form-item label="发版版本：" basis="25%">
        <z-select name="fbbb" :data="fbbb" val-id="DM" show-id="MC"></z-select>
      </z-form-item>
      <z-form-item label="版本：" basis="25%">
        <z-input name="bb"></z-input>
      </z-form-item>
      <z-form-item label="正式地址：" basis="25%">
        <z-input name="zsdz"></z-input>
      </z-form-item>
      <z-form-item label="发版机构：" basis="25%">
        <z-input name="fbjg"></z-input>
      </z-form-item>
      <z-form-item label="纳税人编码：" basis="25%">
        <z-input name="nsrsbm"></z-input>
      </z-form-item>
      <z-btn @click="getCode(3)" state="primary">生成完整配置</z-btn>
      <z-btn @click="getCode(1)" state="primary">生成配置</z-btn>
      <z-btn @click="getCode(2)" state="primary">生成参数</z-btn>
    </z-form>
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { fwq } from '../data';
import { useHisTyDzfp } from '../moduleTs';
defineOptions({
  name: 'jtphis-dzfp'
})

const { code, formData, getCode, fbbb } = useHisTyDzfp('T_DZPJ_JKPZ')
</script>
<style lang="scss">
.jtphis_dzfp {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
