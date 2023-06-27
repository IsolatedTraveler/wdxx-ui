<template>
  <div class="App">
    <div class="left">
      <ul>
        <li v-for="(it) in menu" @click.stop="clickEvent(it)">
          <p>{{ it.title }}</p>
          <ul v-if="it.children && it.children.length" v-show="!showId[it.path]">
            <li v-for="(v) in it.children" @click.stop="clickEvent(v)">
              {{ v.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="right">
      <router-view class="router"></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import menu from './router/def/index'
export default {
  name: 'App',
  data() {
    var showId: any = {}
    return {
      menu,
      showId
    }
  },
  mounted() {
    console.timeEnd()
  },
  methods: {
    clickEvent({ name, path }: any) {
      if (name) {
        this.$router.push({ name })
      } else {
        this.showId[path] = !this.showId[path]
      }
    }
  }
}
</script>
<style lang="scss">
#app,
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  display: flex;
  width: 100%;
  height: 100%;

  .left {
    width: 30%;
    min-width: 12em;
    max-width: 18em;
    max-height: 100%;
    overflow-y: auto;
    border-right: 1px solid #dcdcdc;
    padding: .5em;
  }

  .right {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding-left: .5em;
    padding-right: .5em;

    >.router {
      width: 100%;
      display: block;
      padding-top: .5em;
    }
  }
}
</style>
