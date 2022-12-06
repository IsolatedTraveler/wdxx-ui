<template>
  <div ref="_ref">
    <!-- 展示框 -->
    <slot name="show">
      <!-- 多选 -->
      <div v-if="props.multi">
        <!-- 检索框 -->
        <input type="text">
      </div>
      <!-- 单选 -->
      <input type="text" v-else="props.multi">
    </slot>
    <!-- 弹出层 -->
  </div>
</template>
<script lang="ts" setup>
import { selectEmits, selectProps } from './select'
import { useSelect } from './use-select'
defineOptions({
  name: 'z-select'
})
const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)
const {_ref} = useSelect(props, emit)
defineExpose({
  ref: _ref
})
</script>