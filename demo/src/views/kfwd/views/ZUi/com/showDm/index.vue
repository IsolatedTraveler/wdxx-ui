<template>
  <div class="control">
    <z-btn @click="_code?.copy?.()">复制代码</z-btn>
    <z-btn @click="show = !show">{{ show ? '隐藏源代码' : '查看源代码' }}</z-btn>
  </div>
  <z-code ref="_code" v-show="show" type="html" :data="code"></z-code>
  <div class="control" v-show="show"><z-btn @click="show = !show">{{ show ? '隐藏源代码' : '查看源代码' }}</z-btn></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showDmProps } from './showDm'
defineProps(showDmProps)
defineOptions({
  name: 'show-dm'
})
const show = ref(false), _code = ref()
</script>
<style lang="scss" scoped>
.control {
  margin-bottom: 1em;
}

.z-code {
  margin-bottom: 1em;
}
</style>
