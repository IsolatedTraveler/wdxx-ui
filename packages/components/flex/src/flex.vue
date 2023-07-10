<template>
  <div ref="_ref" :class="_class" :style="_style">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { flexEmits, flexProps } from './flex'
import { useFlex } from './use-flex'
defineOptions({
  name: 'z-flex'
})
const props = defineProps(flexProps)
const emit = defineEmits(flexEmits)
const { _ref, _class, _style } = useFlex(props, emit)
defineExpose({
  ref: _ref
})
</script>