<template>
  <z-table class="bbgx-publish" :data="data" :cols="cols">
    <template v-slot:_cz="{ data }">
      <z-btn state="primary" size="sm" @click="publish(data)">发布</z-btn>
      <z-btn state="success" size="sm" @click="del(data)">移除</z-btn>
    </template>
  </z-table>
</template>
<script lang="ts" setup>
import useBBgx from './use'
import { publishProps } from './publish';
const props = defineProps(publishProps)
defineOptions({
  name: 'bbgx-publish'
})
const { data, cols, publish, del } = useBBgx(props)
</script>
<style lang="scss" scoped>
.bbgx-publish {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
