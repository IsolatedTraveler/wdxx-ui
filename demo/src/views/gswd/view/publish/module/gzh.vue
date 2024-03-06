<template>
  <z-flex flex="col" class="publish-gzh">
    公众号首次发版
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="发版地区别名：" basis="25%">
        <z-input name="fbd"></z-input>
      </z-form-item>
      <z-form-item label="发版类型：" basis="25%">
        <z-select v-model="lx" :data="fblxOption"></z-select>
      </z-form-item>
      <z-form-item label="外网地址：" basis="25%" v-show="lx != 1">
        <z-input name="wwdz"></z-input>
      </z-form-item>
      <z-form-item label="机构唯一编码：" basis="25%">
        <z-input name="jgid"></z-input>
      </z-form-item>
      <z-form-item label="支付方式：" basis="25%">
        <z-select name="zffs" :data="zffsOption"></z-select>
      </z-form-item>
      <z-form-item label="有效期：" basis="25%">
        <z-input name="yxq"></z-input>
      </z-form-item>
      <z-form-item label="开发者ID：" basis="25%">
        <z-input name="APPID"></z-input>
      </z-form-item>
      <z-form-item label="开发者密码：" basis="25%">
        <z-input name="Appsecret"></z-input>
      </z-form-item>
      <z-form-item label="商户号：" basis="25%">
        <z-input name="MCHID"></z-input>
      </z-form-item>
      <z-form-item v-for="(it) in formItems" :key="it.name" :label="it.mc">
        <z-input :name="it.name"></z-input>
      </z-form-item>
    </z-form>
    <z-code v-for="(it, i) in code" :key="i" :data="it.code" :type="it.lx"></z-code>
    公众号更新
  </z-flex>
</template>

<script lang="ts" setup>
import useGzh from '../data/gzh'
const { code, lx, formData, formItems, zffsOption, fblxOption } = useGzh()
defineOptions({
  name: 'publish-gzh'
})
</script>

<style lang="scss">
.publish-gzh {
  overflow: auto !important;
  height: 100%;

  .z-form {
    width: 100%;

    label {
      min-width: 7em;
    }
  }
}
</style>
