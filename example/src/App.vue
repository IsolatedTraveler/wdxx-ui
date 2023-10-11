<template>
  <z-flex class="App">
    <z-tree class="left" :data="menu" :alias="alias" @selected="clickEvent"></z-tree>
    <router-view class="right" />
  </z-flex>
</template>
<script lang="ts">
import menu from './router/def/index'
export default {
  name: 'App',
  data() {
    return {
      menu,
      alias: {
        id: 'name',
        mc: 'title',
        child: 'children'
      }
    }
  },
  methods: {
    clickEvent({ name }: any) {
      if (name) {
        this.$router.push({ name })
      }
    }
  }
}
</script>
<style lang="scss">
#app,
html,
body,
.App {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  .left {
    height: 100%;
    width: 30%;
    min-width: 12em;
    max-width: 18em;
    max-height: 100%;
    overflow-y: auto;
    border-right: 1px solid #dcdcdc;
    padding: .5em;
    box-sizing: border-box;
  }

  .right {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding-left: .5em;
    padding-right: .5em;
    padding-top: .5em;
  }
}
</style>
