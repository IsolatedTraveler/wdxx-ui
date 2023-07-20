<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { inputEmits, inputProps } from './input'
import { useInput } from './use-input'
defineOptions({
  name: 'z-input'
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const {_ref, _class} = useInput(props, emit)
defineExpose({
  ref: _ref
})
</script>