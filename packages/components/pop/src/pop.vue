<template>
  <slot :class="_class"></slot>
</template>

<script lang="ts" setup>
import { popEmits, popProps } from './pop'
import { usePop } from './use-pop'
defineOptions({
  name: 'z-pop'
})
const props = defineProps(popProps)
const emit = defineEmits(popEmits)
const { _class, init } = usePop(props, emit)
defineExpose({
  init
})
</script>