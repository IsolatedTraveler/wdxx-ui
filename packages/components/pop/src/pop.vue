<template>
  <div ref="_ref" :class="_class" :style="_style" v-show="show">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { popEmits, popProps } from './pop'
import { usePop } from './use-pop'
defineOptions({
  name: 'z-pop'
})
const props = defineProps(popProps)
const emit = defineEmits(popEmits)
const { init, _ref, _class, _style } = usePop(props, emit)
defineExpose({
  init
})
</script>