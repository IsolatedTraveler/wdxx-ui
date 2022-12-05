<template>
  <div ref="_ref"></div>
</template>
<script lang="ts" setup>
import { selectTableEmits, selectTableProps } from './select-table';
import { useSelectTable } from './use-select-table';
defineOptions({
  name: 'z-select-table'
})
const props = defineProps(selectTableProps)
const emit = defineEmits(selectTableEmits)

const {_ref} = useSelectTable(props, emit)
defineExpose({
  ref: _ref
})
</script>