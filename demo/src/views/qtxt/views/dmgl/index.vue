<template>
  <z-flex auto="1" class="qtxt-dmgl">
    <z-flex col span="30" class="xtcd">
      <z-tree :data="xtcd"></z-tree>
    </z-flex>
    <div>
      <z-flex col auto="1"></z-flex>
    </div>
  </z-flex>
</template>
<script lang="ts" setup>
import { useQtxtDmgl } from './use-dmgl';
defineOptions({
  name: 'qtxt-dmgl'
})
const { _ref, xtcd } = useQtxtDmgl()
defineExpose({
  _ref
})
</script>
<style lang="scss">
.qtxt-dmgl {
  >.xtcd {
    max-width: 300px;
  }
}
</style>
