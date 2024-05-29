<template>
  <z-article class="bbgx-gb" :data="menu" :coms="coms"></z-article>
</template>
<script lang="ts" setup>
import { getMenuItem } from '@/views/kfwd/views/rule/data/getMenuItem';
import { gbProps } from './gb';
import { provide } from 'vue';
const props = defineProps(gbProps)
  , coms = import.meta.glob('./**/index.vue')
  , menu: any = [
    getMenuItem('html', '前端代码发布')
    , getMenuItem('sqldy', 'sqldy发布')
    , getMenuItem('prody', 'prody发布')
    , getMenuItem('table', 'table修改')
    , getMenuItem('end', '合并备份')
  ]
provide('gswdPublishBbgxJlGb', props)
defineOptions({
  name: 'bbgx-gb'
})
</script>
<style lang="scss" scoped>
.bbgx-gb {
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
</style>