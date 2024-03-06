<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { popEmits, popProps } from './pop'
import { usePop } from './use-pop'
defineOptions({
  name: 'z-pop'
})
const props = defineProps(popProps)
const emit = defineEmits(popEmits)
const {_ref, _class} = usePop(props, emit)
defineExpose({
  ref: _ref
})
</script>