<template>
  <div class="jdsl">
    <div class="title">{{ title }}</div>
    <div class="sm" v-html="sm"></div>
    <div class="slnr">
      <slot></slot>
      <show-dm :code="code"></show-dm>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { jdslProps } from './jdsl'
import showDm from '../showDm/index.vue'
defineOptions({
  name: 'jdsl'
})
defineProps(jdslProps)
</script>
<style lang="scss">
.jdsl {
  .title {
    font-size: 1.8em;
    font-weight: bold;
  }

  .title,
  .sm {
    line-height: 2em;
  }

  .sm {
    margin-bottom: .8em;
  }

  &,
  .slnr {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
  }

  .slnr {
    border: 1px solid var(--color-border-2);
    padding-bottom: 0;
  }
}
</style>
