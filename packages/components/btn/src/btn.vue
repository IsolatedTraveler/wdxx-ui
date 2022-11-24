<template>
  <button ref="_ref" class="z-btn" @click="handleClick" :disabled="_disabled" :size="_size">
    测试
  </button>
</template>
<script lang="ts" setup>
import { btnEmits, btnProps } from './btn';
import { useBtn } from './use-btn';
defineOptions({
  name: 'z-btn'
})
const props = defineProps(btnProps)
const emit = defineEmits(btnEmits)
const {_ref, handleClick, _disabled, _size} = useBtn(props, emit)
defineExpose({
  ref: _ref
})
</script>
