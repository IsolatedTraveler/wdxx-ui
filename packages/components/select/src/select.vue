<template>
  <div ref="_ref" :class="_class" :style="_style">
    <input v-show="!val.length" autocomplete="off" :="prop" :placeholder="$props.placeholder">
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
const { _ref, _class, prop, _style, val } = useSelect(props, emit)
defineExpose({
  ref: _ref
})
</script>