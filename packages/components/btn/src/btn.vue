<template>
  <button ref="_ref" class="z-btn" :class="_class" @click="handleClick" :disabled="_disabled">
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
const {_ref, handleClick, _disabled, _class} = useBtn(props, emit)
defineExpose({
  ref: _ref
})
</script>
