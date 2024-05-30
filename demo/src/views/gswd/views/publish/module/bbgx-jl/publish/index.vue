<template>
  <z-flex class="bbgx-publish" flex="col">
    <z-table :data="data" :cols="cols">
      <template v-slot:_cz="{ data }">
        <z-btn state="primary" size="sm" @click="publish(data)">发布</z-btn>
        <z-btn state="success" size="sm" @click="del(data)">移除</z-btn>
      </template>
    </z-table>
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
      <z-form-item label="详细描述：" basis="75%">
        <z-input name="detail"></z-input>
      </z-form-item>
    </z-form>
    <seMarkdown class="end" :data="content"></seMarkdown>
  </z-flex>
</template>
<script lang="ts" setup>
import useBBgx from './use'
import { publishProps } from './publish';
import { Lx } from '@/views/kfwd/views/git/module/commit/use.arr'
import { useCommit } from '@/views/kfwd/views/git/module/commit/use'
import { seMarkdown } from '@/components/base';
const props = defineProps(publishProps)
defineOptions({
  name: 'bbgx-publish'
})
const { formData, code } = useCommit()
  , { data, cols, publish, del, content } = useBBgx(props, code)
formData.value.gn = props.ms || ''
</script>
<style lang="scss" scoped>
.bbgx-publish {
  margin-top: .5em;
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;

  .z-form {
    margin-top: .5em;
    width: 100%;
  }
}
</style>
