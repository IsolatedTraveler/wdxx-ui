<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { thEmits, thProps } from './th'
import { useTh } from './use-th'
defineOptions({
  name: 'z-th'
})
const props = defineProps(thProps)
const emit = defineEmits(thEmits)
const {_ref, _class} = useTh(props, emit)
defineExpose({
  ref: _ref
})
</script>