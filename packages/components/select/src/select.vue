<template>
  <div ref="_ref" :class="_class" :style="_style" @click.stop="showPop">
    <div v-if="isShow" @click.stop="showPop">
      <span v-for="(it, i) in  showVal" :key="i" @click.stop="showPop">{{ it }}</span>
    </div>
    <input v-else autocomplete="off" :="prop" :placeholder="$props.placeholder" @blur="" @click.stop="showPop"
      :value="showVal">
    <z-pop ref="_pop" :show="show">
      <div ref="_pop_content">
        <component :is="com" :data="data" v-model:obj="valObj" v-model="val"></component>
      </div>
    </z-pop>
  </div>
</template>

<script lang="ts" setup>
import { selectEmits, selectProps } from './select'
import { useSelect } from './use-select'
import { ZPop } from '@ui/components'
defineOptions({
  name: 'z-select'
})
const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)
const { _ref, _pop, _pop_content, _class, prop, _style, showVal, isShow, show, showPop, com, valObj, val } = useSelect(props, emit)
defineExpose({
  ref: _ref
})
</script>