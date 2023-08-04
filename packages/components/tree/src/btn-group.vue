<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { btnGroupEmits, btnGroupProps } from './btn-group'
import { useBtnGroup } from './use-btn-group'
defineOptions({
  name: 'z-btn-group'
})
const props = defineProps(btnGroupProps)
const emit = defineEmits(btnGroupEmits)
const {_ref, _class} = useBtnGroup(props, emit)
defineExpose({
  ref: _ref
})
</script>