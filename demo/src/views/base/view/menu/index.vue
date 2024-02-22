<template>
  <z-flex class="base-menu" flex="col">
    <div class="xtxx"></div>
    <z-flex auto="1" class="xtxq" flex="row">
      <z-tree class="left" :data="user.getMenu" :alias="alias" @checked="changePage" scroll :def="def"></z-tree>
      <router-view class="content" v-slot="{ Component, route }" v-if="item.lx === 'route'">
        <keep-alive :include="item.path">
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </router-view>
      <iframe class="content" :src="item.path" frameborder="0" v-else-if="item.lx === 'iframe'"></iframe>
      <div class="content" v-else>
        暂未添加该类型的解决方案${item.lx}
      </div>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { useMenu } from './use-menu'
defineOptions({
  name: 'base-menu'
})
const { user, alias, item, changePage, def } = useMenu()
</script>
<style lang="scss">
.base-menu {
  width: 100%;
  height: 100%;

  >.xtxx {
    flex-basis: 3em;
    width: 100%;
    border-bottom: 1px solid var(--color-border-2);
  }

  >.xtxq {
    width: 100%;

    >.left {
      flex-basis: 10em;
    }

    >.content {
      border-left: 1px solid var(--color-border-2);
      height: 100%;
      flex: 1 0 0;

      >.title {
        flex-basis: 2em;
        border-bottom: 1px solid var(--color-border-2);
        width: 100%;
      }
    }
  }
}
</style>