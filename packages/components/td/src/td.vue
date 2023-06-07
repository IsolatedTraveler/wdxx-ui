<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { tdEmits, tdProps } from './td'
import { useTd } from './use-td'
defineOptions({
  name: 'z-td'
})
const props = defineProps(tdProps)
const emit = defineEmits(tdEmits)
const {_ref, _class} = useTd(props, emit)
defineExpose({
  ref: _ref
})
</script>