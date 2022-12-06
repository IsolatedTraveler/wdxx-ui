<template>
  <div ref="_ref"></div>
</template>
<script lang="ts" setup>
import { iconEmits, iconProps } from './icon'
import { useIcon } from './use-icon'
defineOptions({
  name: 'z-icon'
})
const props = defineProps(iconProps)
const emit = defineEmits(iconEmits)
const {_ref} = useIcon(props, emit)
defineExpose({
  ref: _ref
})
</script>