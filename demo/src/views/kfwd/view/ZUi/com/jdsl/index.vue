<template>
  <div class="jdsl">
    <div class="title">{{ title }}</div>
    <div class="sm">{{ sm }}</div>
    <div class="slnr">
      <slot></slot>
      <!-- 控制按钮 -->
      <z-code type="html" :data="code"></z-code>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { jdslProps } from './jdsl';
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
  }
}
</style>
