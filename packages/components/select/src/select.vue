<template>
  <div ref="_ref"></div>
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