<template>
  <div class="ZUi-btn">
    <jdsl title="基础用法" sm="使用shape、state和radius来定义按钮样式" code="">
      <basic></basic>
    </jdsl>
  </div>
</template>
<script lang="ts" setup>
import basic from './basic.vue';
import jdsl from '../../com/jdsl/index.vue'
defineOptions({
  name: 'ZUi-btn'
})
</script>
<style lang="scss">
.ZUi-btn {
  flex-basis: 0;
  flex-grow: 1;
}
</style>
