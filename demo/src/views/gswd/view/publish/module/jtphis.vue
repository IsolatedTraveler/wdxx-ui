<template>
  <div class="jtphis">
    <z-code type="sql" :data="code"></z-code>
  </div>
</template>
<script lang="ts" setup>
import { useJtphis } from '../moduleTs';
defineOptions({
  name: 'jtphis'
})

const { code } = useJtphis()
</script>
<style lang="scss">
.jtphis {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
