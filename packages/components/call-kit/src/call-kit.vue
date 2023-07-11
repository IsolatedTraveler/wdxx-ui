<template>
  <z-flex ref="_ref" :class="_class">
    <z-media v-if="single" class="z-call-kit--remote"></z-media>
    <z-flex class="z-call-kit--multi" auto="1" v-else>
      <z-media v-for="(it,i) in media" :key="i" :order="it.id == localId ? 1 : it.id == clickId ? 2 : 3" :props="it"></z-media>
    </z-flex>
    <z-media class="z-call-kit--main" :props="main"></z-media>
  </z-flex>
</template>
<script lang="ts" setup>
import { callKitEmits, callKitProps } from './call-kit'
import { useCallKit } from './use-call-kit'
import ZFlex from '@ui/components/flex/src/flex.vue'
import ZMedia from '@ui/components/media/src/media.vue'
defineOptions({
  name: 'z-call-kit'
})
const props = defineProps(callKitProps)
const emit = defineEmits(callKitEmits)
const { _ref, _class, main, clickId } = useCallKit(props, emit)
defineExpose({
  ref: _ref
})
</script>