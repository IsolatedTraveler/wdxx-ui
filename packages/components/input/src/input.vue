<template>
  <div ref="_ref" :class="_class" :style="_style">
    <input autocomplete="off" :="prop" :value="value1" @input="submit">
    <span v-if="unit">{{ unit }}</span>
  </div>
</template>
<script lang="ts" setup>
import { inputEmits, inputProps } from './input'
import { useInput } from './use-input'
defineOptions({
  name: 'z-input'
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const { _ref, _class, prop, _style, value1, submit } = useInput(props, emit)
defineExpose({
  ref: _ref
})
</script>