<template>
  <div ref="_ref" :class="_class">
    <div></div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { callKitEmits, callKitProps } from './call-kit'
import { useCallKit } from './use-call-kit'
defineOptions({
  name: 'z-call-kit'
})
const props = defineProps(callKitProps)
const emit = defineEmits(callKitEmits)
const { _ref, _class } = useCallKit(props, emit)
defineExpose({
  ref: _ref
})
</script>