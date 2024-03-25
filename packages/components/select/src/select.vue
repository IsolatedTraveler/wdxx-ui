<template>
  <div ref="_ref" :class="_class" :style="_style" @click.stop="showPop">
    <div v-if="multi" @click.stop="showPop">
      <span v-for="(it, i) in  showVal" :key="i" @click.stop="showPop">{{ it }}</span>
    </div>
    <input ref="_input" v-show="inputShow" autocomplete="off" :="prop" :placeholder="$props.placeholder"  @blur="show = false" @click.stop="showPop"
      :value="showVal">
    <z-pop ref="_pop" :show="show" @hide="show=false" @mousedown.prevent="">
      <component :is="com" :data="data" v-model="val" @setVal="setVal" :alias="{ id: valId, mc: showId }"></component>
    </z-pop>
  </div>
</template>

<script lang="ts" setup>
import { selectEmits, selectProps } from './select'
import { useSelect } from './use-select'
import { ZPop } from '@ui/components/pop'
defineOptions({
  name: 'z-select'
})
const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)
const { _class, _style, _ref, _pop, _input, prop, showVal, show, showPop, com, setVal, val,inputShow } = useSelect(props, emit)
defineExpose({
  ref: _ref
})
</script>