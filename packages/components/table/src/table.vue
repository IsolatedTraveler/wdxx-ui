<template>
  <div ref="_ref"></div>
</template>
<script lang="ts" setup>
import { tableEmits, tableProps } from './table'
import { useTable } from './use-table'
defineOptions({
  name: 'z-table'
})
const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)
const {_ref} = useTable(props, emit)
defineExpose({
  ref: _ref
})
</script>