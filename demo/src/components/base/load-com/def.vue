<template>
  <div class="def">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'def'
})
</script>
<style lang="scss">
.def {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
