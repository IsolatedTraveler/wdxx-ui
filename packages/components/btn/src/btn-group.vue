<template>
  <div ref="_ref" :class="_class">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { btnGroupProps } from './btn-group'
import { useBtnGroup } from './use-btn-group'
defineOptions({
  name: 'z-btn-group'
})
const props = defineProps(btnGroupProps)
const {_ref, _class} = useBtnGroup(props)
defineExpose({
  ref: _ref,
  _class
})
</script>