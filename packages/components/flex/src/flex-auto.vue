<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { flexAutoEmits, flexAutoProps } from './flex-auto'
import { useFlexAuto } from './use-flex-auto'
defineOptions({
  name: 'z-flex-auto'
})
const props = defineProps(flexAutoProps)
const emit = defineEmits(flexAutoEmits)
const {_ref, _class} = useFlexAuto(props, emit)
defineExpose({
  ref: _ref
})
</script>