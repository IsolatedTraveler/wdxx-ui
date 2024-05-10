<template>
  <div class="ZUi-btn">
    <jdsl v-for="({name, prop},i) in data" :key="i" v-bind="prop">
      <component :is="loadComponent(name,i)"/>
    </jdsl>
  </div>
</template>
<script lang="ts" setup>
import { useBtn } from './use-btn'
import jdsl from '../../com/jdsl/index.vue'
defineOptions({
  name: 'ZUi-btn'
})
const {data, loadComponent} = useBtn()
</script>
<style lang="scss">
.ZUi-btn {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
