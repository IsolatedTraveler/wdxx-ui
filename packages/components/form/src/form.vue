<template>
  <div ref="_ref" :class="_class">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { formEmits, formProps } from './form'
import { useForm } from './use-form'
defineOptions({
  name: 'z-form'
})
const props = defineProps(formProps)
const emit = defineEmits(formEmits)
const { _ref, _class } = useForm(props, emit)
defineExpose({
  ref: _ref
})
</script>