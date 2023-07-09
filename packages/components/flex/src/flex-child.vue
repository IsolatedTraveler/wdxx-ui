<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { flexChildEmits, flexChildProps } from './flex-child'
import { useFlexChild } from './use-flex-child'
defineOptions({
  name: 'z-flex-child'
})
const props = defineProps(flexChildProps)
const emit = defineEmits(flexChildEmits)
const { _ref, _class } = useFlexChild(props, emit)
defineExpose({
  ref: _ref
})
</script>