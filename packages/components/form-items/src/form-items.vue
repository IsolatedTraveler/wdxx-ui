<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { formItemsEmits, formItemsProps } from './form-items'
import { useFormItems } from './use-form-items'
defineOptions({
  name: 'z-form-items'
})
const props = defineProps(formItemsProps)
const emit = defineEmits(formItemsEmits)
const {_ref, _class} = useFormItems(props, emit)
defineExpose({
  ref: _ref
})
</script>