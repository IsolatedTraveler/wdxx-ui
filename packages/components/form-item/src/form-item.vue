<template>
  <div ref="_ref" :class="_class" :style="_style">
    <label>{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { formItemEmits, formItemProps } from './form-item'
import { useFormItem } from './use-form-item'
defineOptions({
  name: 'z-form-item'
})
const props = defineProps(formItemProps)
const emit = defineEmits(formItemEmits)
const { _ref, _class, _style } = useFormItem(props, emit)
defineExpose({
  ref: _ref
})
</script>