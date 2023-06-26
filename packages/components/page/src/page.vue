<template>
  <div ref="_ref" :class="_class"></div>
</template>
<script lang="ts" setup>
import { pageEmits, pageProps } from './page'
import { usePage } from './use-page'
defineOptions({
  name: 'z-page'
})
const props = defineProps(pageProps)
const emit = defineEmits(pageEmits)
const {_ref, _class} = usePage(props, emit)
defineExpose({
  ref: _ref
})
</script>