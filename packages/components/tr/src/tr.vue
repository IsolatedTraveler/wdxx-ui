<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { trEmits, trProps } from './tr'
import { useTr } from './use-tr'
defineOptions({
  name: 'z-tr'
})
const props = defineProps(trProps)
const emit = defineEmits(trEmits)
const {_ref, _class} = useTr(props, emit)
defineExpose({
  ref: _ref
})
</script>