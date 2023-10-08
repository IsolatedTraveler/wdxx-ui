<template>
  <z-flex auto="1" class="sjcl-excel-to-data-base">
    数据处理
  </z-flex>
</template>
<script lang="ts" setup>
import { seUse } from './use';
import { seEmits, seProps } from './prop'
defineOptions({
  name: 'sjcl-excel-to-data-base'
})
const prop = defineProps(seProps)
const emit = defineEmits(seEmits)
const { _ref } = seUse(prop, emit)
defineExpose({
  _ref
})
</script>
<style lang="scss">
// .sjcl-excel-to-data-base {

// }
</style>
