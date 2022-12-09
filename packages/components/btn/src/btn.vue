<template>
  <button
    ref="_ref"
    type="button"
    :class="_class"
    :style="_style"
    @click="_handleClick"
  :disabled="_disabled">
    <slot name="icon">
      <z-icon v-if="props.icon"></z-icon>
    </slot>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { btnEmits, btnProps } from './btn';
import { useBtn } from './use-btn';
import ZIcon from '@ui/components/icon/src/icon.vue'
defineOptions({
  name: 'z-btn'
})
const props = defineProps(btnProps)
const emit = defineEmits(btnEmits)
const {_ref, _handleClick, _disabled, _class, _style} = useBtn(props, emit)
defineExpose({
  ref: _ref
})
</script>
