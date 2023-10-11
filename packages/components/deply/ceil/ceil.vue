<template>
  <component v-if="col.mc" :is="col.type" v-model="data[col.id]" v-model:mc="data[col.mc]" :="col.props" @click="">
  </component>
  <component v-else :is="col.type" v-model="data[col.id]" :="col.props" @click=""></component>
</template>
<script lang="ts" setup>
import { ceilProps } from './ceil'
import { useCeil } from './use-ceil'
defineOptions({
  name: 'z-ceil'
})
const props = defineProps(ceilProps)
const { _ref } = useCeil(props)
defineExpose({
  ref: _ref
})
</script>