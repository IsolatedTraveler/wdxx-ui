<template>
  <pre ref="_ref" :class="_class" class="hljs-container" :codetype="type" @mouseover="showCopy = true"
    @mouseout="showCopy = false"><code ref="_code" :class="type" :style="{ paddingLeft: 1.8 + len + 'em' }">{{ data }}</code><ul class="z-code-number" :style="{ width: len + 'em' }"><li v-for="i in size" :key="i">{{ i }}</li></ul><z-btn @click="copy" v-show="showCopy" state="primary" shape="ghost" size="sm">{{ tip }}</z-btn></pre>
</template>
<script lang="ts" setup>
import { codeEmits, codeProps } from './code'
import { useCode } from './use-code'
defineOptions({
  name: 'z-code'
})
const props = defineProps(codeProps)
const emit = defineEmits(codeEmits)
const { _ref, _class, _code, size, len, copy, tip, showCopy } = useCode(props, emit)
defineExpose({
  ref: _ref
})
</script>