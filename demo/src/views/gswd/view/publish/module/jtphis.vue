<template>
  <div class="jtphis">
    <z-form flex="row" wrap v-model="formData">
      <z-form-item label="功能：" basis="25%">
        <z-select name="gnid" :data="gnml" valId="GNID" showId="GNMC"></z-select>
      </z-form-item>
      <z-form-item label="接口：" basis="25%">
        <z-select name="jkid" :data="jkMl" valId="JKID" showId="JKMC"></z-select>
      </z-form-item>
      <z-form-item label="机构：" basis="25%">
        <z-input name="jgid"></z-input>
      </z-form-item>
      <z-btn @click="getPublish">生成</z-btn>
    </z-form>
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { hisTyThird } from '../fun';
defineOptions({
  name: 'jtphis'
})

const { code, gnml, formData, jkMl, getPublish } = hisTyThird()
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
