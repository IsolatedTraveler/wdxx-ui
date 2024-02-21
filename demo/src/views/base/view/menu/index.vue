<template>
  <z-flex class="base-menu" flex="col">
    <div class="xtxx"></div>
    <z-flex auto="1" class="xtxq" flex="row">
      <z-flex basis="10em" wrap class="left">
        <z-tree :data="user.getMenu" :alias="alias" @checked="changePage"></z-tree>
      </z-flex>
      <z-flex col class="content" auto="1">
        <div class="title"></div>
        <!-- <seBaseRoute></seBaseRoute> -->
      </z-flex>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store';
const user = useUserStore(), alias = {
  id: 'name',
  mc: 'title',
  child: 'children'
}
user.setMenu()
function changePage(item: any) {
  console.log(item)
}
</script>
<style lang="scss">
.base-menu {
  width: 100%;
  height: 100%;

  >.xtxx {
    flex-basis: 3em;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
  }

  >.xtxq {
    width: 100%;

    >.content {
      border-left: 1px solid #dcdcdc;

      >.title {
        flex-basis: 2em;
        border-bottom: 1px solid #dcdcdc;
        width: 100%;
      }

      >.router {
        flex-grow: 1;
        height: 100%;
      }
    }
  }
}
</style>