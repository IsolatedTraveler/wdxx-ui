<template>
  <z-flex class="base-menu" flex="col">
    <div class="xtxx"></div>
    <z-flex auto="1" class="xtxq" flex="row">
      <z-flex basis="10em" wrap class="left">
        <z-tree :data="user.getMenu" :alias="alias" @checked="changePage"></z-tree>
      </z-flex>
      <z-flex col class="content" auto="1">
        <div class="title"></div>
        <router-view v-slot="{ Component, route }" v-if="item.lx === 'route'">
          <keep-alive :include="item.path">
            <component :is="Component" :key="route.name" class="router" />
          </keep-alive>
        </router-view>
        <iframe :src="item.path" frameborder="0" v-else-if="item.lx === 'iframe'"></iframe>
        <z-flex auto="1" class="router" v-else>
          <!-- <input type="file" @change="change"> -->
        </z-flex>
      </z-flex>
    </z-flex>
  </z-flex>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store';
import router from '@/router';
import { ref } from 'vue';
import { ObjAny } from '@ui/vars';
const user = useUserStore(), alias = {
  id: 'name',
  mc: 'title',
  child: 'children'
}, item = ref({} as ObjAny), url = ref([] as string[])
user.setMenu()
function changePage(it: any) {
  if (it.path) {
    if (it.lx === 'route') {
      router.push({ path: it.path })
      url.value.push(it.path)
    }
    item.value = it
  }
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
      height: 100%;

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