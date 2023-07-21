<template>
  <div ref="_ref" :class="_class">
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
const {_ref, _class} = useFormItem(props, emit)
defineExpose({
  ref: _ref
})
</script>